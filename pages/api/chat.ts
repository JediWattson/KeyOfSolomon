
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const { text } = JSON.parse(req.body);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
        Oracle can fortell fictional futures and describes visions vividly with great detail:
        ${text}
      `,
      stream: true,
      temperature: 0.5,
      max_tokens: 230,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    }, { responseType: 'stream' });

    let oracleRes = ''
    response.data.on('data', data => {
      const lines = data.toString().split('\n').filter(line => line.trim() !== '');
      lines.forEach(line => {        
        const message = line.replace(/^data: /, '');
        if (message === '[DONE]') {
          return res.status(200).json({ text: oracleRes })
        } else {
          oracleRes += JSON.parse(message).choices[0].text;
        }
      });
    })
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}