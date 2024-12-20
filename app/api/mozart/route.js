const fs = require('fs')

const makeOptions = (seq) => ({
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.XAI_API_KEY}`
	},
	method: "POST",
	body: JSON.stringify({
		stream: true,
		model: "grok-2-1212",
		messages: [
			{
				role: "system",
				content: "You are a business analyst, looking at the following sequence determine what's going on in this user session"
			},
			{
				role: "user",
				content: seq
			}
		]
	})
})

function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

	
async function* makeIterator(streamBody) {
	let partialData = ""; 
	const textDecoder = new TextDecoder();
	const encoder = new TextEncoder();
	for await (const chunk of streamBody) {
		const textChunk = textDecoder.decode(chunk);
		try {
			partialData += textChunk
			let lines = partialData.split('\n')
			partialData = lines.pop()
			
			const content = lines.filter(
				line => line.trim() !== "" && !line.includes("[DONE]")
			).map(line => {
				try {
					const strObj = line.trim().replace("data: ", '')
					const strmObj = JSON.parse(strObj)
					return strmObj.choices[0].delta.content
				} catch(e) {
					console.log("ERROR", line)
				}
			}).join("")		
			yield encoder.encode(content)
		} catch(e) {
			console.log(e)
		}
	}
}

export async function POST(req) {
	const { seq } = await req.json()
	
	let stream
	if (!process.env.XAI_API_KEY) {
		const res = await fetch(
			"https://api.x.ai/v1/chat/completions", 
			makeOptions(seq)
		)
		stream = res.body
	} else
		stream = fs.createReadStream("chat_complete.txt");

	return new Response(iteratorToStream(makeIterator(stream)))
}
