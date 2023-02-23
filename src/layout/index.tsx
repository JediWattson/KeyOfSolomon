import Head from "next/head";
import Header from "../header";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{`Solomon's Index`}</title>
        <meta name="theme-color" content="#136394" />
        <link
          rel="shortcut icon"
          href="https://cdn2.iconfinder.com/data/icons/keys-line-style/120/key-19-512.png"
        />
      </Head>
      <Header />
      <div className={styles.rowContainer}>{children}</div>
    </>
  );
};

export default Layout;
