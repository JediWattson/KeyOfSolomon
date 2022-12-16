import Link from "next/link";

import styles from "./styles.module.css";

const GithubLink = () => {
  return (
    <Link href={"https://github.com/JediWattson/KeyOfSolomon"}>
      <h3 className={styles.link}>{`Check out the code in Github!`}</h3>
    </Link>
  );
};

export default GithubLink;
