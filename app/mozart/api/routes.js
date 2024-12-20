export async function GET() {
	console.log(process.env.XAI_KEY)
	return Response.json({ hello: "world" })
}
