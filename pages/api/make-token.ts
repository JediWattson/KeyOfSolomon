import * as jose from "jose";

const alg = "RS256";
export default async function handler(req, res) {
    return res.status(403).json({ unathorized: true });
    // if (!process.env.RSAPRIV) return;
    // const privateKey = await jose.importPKCS8(process.env.RSAPRIV, alg);
    // const jwt = await new jose.SignJWT({ warrior: true })
    //     .setProtectedHeader({ alg })
    //     .setIssuedAt()
    //     .setExpirationTime("7d")
    //     .sign(privateKey);

    // console.log(jwt);
    // // res.setHeader('Set-Cookie', { oracle: jwt });
    // res.status(403).json({ unathorized: true });
}
