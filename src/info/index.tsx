import Card from "../card";
import Loading from "../loading";

import { usePlanets, makeAlt } from "../../lib/helpers";

import styles from "./styles.module.css";

function Info() {
  const { fetching, day, hour } = usePlanets();
  if (fetching) return <Loading />;

  return (
    <div className={styles.container} >
      <Card
        title="Today's planet"
        img={{
          height: day.height,
          width: day.width,
          src: `https://images-assets.nasa.gov/image/${day.nasaId}/${day.nasaId}~orig.jpg`,
          alt: makeAlt(day?.text),
        }}
        footer={{
          title: day.text,
          subtitle: day.subtitle,
        }}
      />
      <Card
        title="This Hour's Planet"
        img={{
          height: hour.height,
          width: hour.width,
          src: `https://images-assets.nasa.gov/image/${hour.nasaId}/${hour.nasaId}~orig.jpg`,
          alt: makeAlt(hour?.text),
        }}
        footer={{
          title: hour.text,
          subtitle: hour.subtitle,
        }}
      />
    </div>
  );
}

export default Info;
