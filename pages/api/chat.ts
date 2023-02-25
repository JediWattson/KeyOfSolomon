
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
        Oracle is a chatbot that reluctantly answers questions with sarcastic responses:
        ${text}
      `,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}