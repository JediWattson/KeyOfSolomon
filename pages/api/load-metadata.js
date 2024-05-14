import { writeFile, existsSync } from "fs";
import { planets } from "../../src/lib/constants.js";

export default async function handler(req, res) {
  return res.status(403).send();
  const planetFile = "./planets.json";

  const promisePlanets = planets.map(async (planet) => {
    const metaLocRes = await fetch(
      `https://images-api.nasa.gov/metadata/${planet.nasaId}`
    );
    const metaLoc = await metaLocRes.json();
    const metaDataRes = await fetch(metaLoc.location);
    const metaData = await metaDataRes.json();
    const {
      ["AVAIL:Title"]: imgTitle,
      ["File:ImageHeight"]: height,
      ["File:ImageWidth"]: width,
      ["AVAIL:Description"]: description,
    } = metaData;
    return { ...planet, imgTitle, height, width, description };
  });
  const resPlanets = await Promise.all(promisePlanets);
  writeFile(planetFile, JSON.stringify(resPlanets), () => console.log("DONE"));
  return { props: {} };
}
