import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import styles from "./styles.module.css";

const pathLinks = [
  { path: "/", title: "Home" },
  { path: "/planetarium", title: "Planetarium" },
  { path: "/about", title: "About" },
];

function Header() {
  const router = useRouter();

  const links = pathLinks.filter(({ path }) => router.asPath !== path);
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{"The Index of Solomon"}</h2>
      <div className={styles.link}>
        {links.map(({ path, title }, i) => (
          <Fragment key={i}>
            <Link href={path}>
              {title}
            </Link>
            {i < links.length - 1 && <span className={styles.bar}>|</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Header;
