import Head from "next/head";
import Header from "../header";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{`Solomon's Index`}</title>
        <meta property="og:title" content="Famtree's Solomon's Key" />
        <meta property="og:image" content="/case_mtn.jpg" />
        <meta
          property="og:description"
          content="Determine the best way to conduct oneself by time and day referenced from The Lesser Key of Solomon. Using an offset from your location's time of dawn an ideal planet for that hour explains the energy wrought and how it can be best utilized. Also enjoy a curated experience of pictures from NASA to showcase the planets."
        />
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
