import React from "react";
import styles from "../components/home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <nav>
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}