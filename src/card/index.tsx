import Image from "next/image";
import { ReactElement } from "react";

import styles from "./styles.module.css";

function Card({
  img,
  title,
  subtitle,
  footer,
}: {
  title: string;
  subtitle?: string;
  footer?: { title: string; subtitle: string | string[] };
  img: { src: string; alt: string; height: number; width: number };
}) {
  return (
    <div className={styles.cardContainer}>
      <h1>{title}</h1>
      {subtitle && <h4>{subtitle}</h4>}
      <Image
        className={styles.cardImg}
        height={img?.height}
        width={img?.width}
        src={img.src}
        alt={img.alt}
      />
      {footer && (
        <>
          <h2>{footer.title}</h2>
          {Array.isArray(footer.subtitle) ? (
            footer.subtitle.map((text) => <p key={text}>{text}</p>)
          ) : (
            <p>{footer.subtitle}</p>
          )}
        </>
      )}
    </div>
  );
}

export default Card;
