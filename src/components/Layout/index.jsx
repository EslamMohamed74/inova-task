import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./index.module.scss";

export default function index({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
