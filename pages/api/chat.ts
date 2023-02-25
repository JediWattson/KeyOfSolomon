const jose = require("jose");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const alg = "RS256";

export default async function handler(req, res) {
  try {
    if (!req.cookies.oracle) res.status(403).send();
    const publicKey = await jose.importSPKI(process.env.RSAPUB, alg);
    await jose.jwtVerify(req.cookies.oracle, publicKey);

    const { text = [] } = JSON.parse(req.body);
    text.unshift(
      "The Oracle is a bot that creates a murder mystery in ancient greece and talks in dialogue like a text adventure."
    );
    text.push("Oracle:");
    const response = await openai.createCompletion(
      {
        model: "text-davinci-003",
        prompt: text.join("\n"),
        stream: true,
        temperature: 0.5,
        max_tokens: 230,
        stop: ["\n"],
        top_p: 0.3,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      },
      { responseType: "stream" }
    );

    let oracleRes = "";
    response.data.on("data", (data) => {
      const lines = data
        .toString()
        .split("\n")
        .filter((line) => line.trim() !== "");
      lines.forEach((line) => {
        const message = line.replace(/^data: /, "");
        if (message === "[DONE]") {
          return res.status(200).json({ text: oracleRes });
        } else {
          oracleRes += JSON.parse(message).choices[0].text;
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}
