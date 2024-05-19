'use client'

import Header from "../header";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.rowContainer}>{children}</div>
    </>
  );
};

export default Layout;
