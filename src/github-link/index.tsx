import Link from "next/link";

import styles from "./styles.module.css";

const GithubLink = () => {
  return (
    <Link className={styles.link} href={"https://github.com/JediWattson/KeyOfSolomon"}>
      {`Check out the code in Github!`}
    </Link>
  );
};

export default GithubLink;
