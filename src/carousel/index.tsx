import { useState } from "react";

import Card from "../card";

import { planets } from "../../lib/constants";
import { makeAlt } from "../../lib/helpers";

import styles from "./styles.module.css";
import Button from "../button";

function Carousel() {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planet = planets[planetIndex];

  return (
    <div className={styles.container}>
      <Button
        disabled={planetIndex === 0}
        text="<<"
        onClick={() => planetIndex > 0 && setPlanetIndex((prev) => prev - 1)}
      />
      <Card
        title={planet.imgTitle}
        img={{
          height: planet.height,
          width: planet.width,
          src: `https://images-assets.nasa.gov/image/${planet.nasaId}/${planet.nasaId}~orig.jpg`,
          alt: makeAlt(planet?.text),
        }}
      />
      <Button
        disabled={planetIndex === planets.length - 1}
        text=">>"
        onClick={() =>
          planetIndex < planets.length - 1 && setPlanetIndex((prev) => prev + 1)
        }
      />
    </div>
  );
}

export default Carousel;