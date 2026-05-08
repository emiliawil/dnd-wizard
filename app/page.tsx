import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Welcome to DND Character Wizard! 🧙</h1>
          <p>Build your hero step by step (recommended) or roll a random one.</p>
          <Link className={styles.button} href="/create">
            Create a character from scratch
          </Link>
          <Link className={styles.button} href="/random">
            Generate a random character
          </Link>
        </div>
      </main>
    </div>
  );
}
