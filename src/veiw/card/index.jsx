import Image from 'next/image';

import styles from './styles.module.css';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = str =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

function Card({ img, title, subtitle, footer, onClose }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.headerContainer}>
                <h1>{title}</h1>
                {onClose && (
                    <div onClick={onClose} className={styles.closeButton}>
                        X
                    </div>
                )}
            </div>
            {subtitle && (
                <h4>
                    <pre>{subtitle}</pre>
                </h4>
            )}
            {img && (
                <Image
                    className={styles.cardImg}
                    height={img.height}
                    width={img.width}
                    src={img.src}
                    alt={img.alt}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(img.height, img.width),
                    )}`}
                />
            )}
            {footer && (
                <>
                    <h2>{footer.title}</h2>
                    {Array.isArray(footer.subtitle) ? (
                        footer.subtitle.map(text => <p key={text}>{text}</p>)
                    ) : (
                        <p>{footer.subtitle}</p>
                    )}
                </>
            )}
        </div>
    );
}

export default Card;
