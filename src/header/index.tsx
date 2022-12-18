import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

function Header() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{'The Index of Solomon'}</h2>
      <div className={styles.link}>
        {router.asPath === "/about" ? (
          <Link href="/">{"Home"}</Link>
        ) : (
          <Link href="/about">{"About"}</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
