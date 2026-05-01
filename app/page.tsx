"use client";

import React from "react";
import styles from "./page.module.css";
import { generateCharacter } from "./lib/character/generate";
import type { Character } from "./lib/character/types";
import CharacterSheet from "./components/CharacterSheet";

export default function Home() {
  const [characterData, setCharacterData] = React.useState<Character | null>(
    null,
  );

  const handleGenerateCharacter = () => {
    const character = generateCharacter();
    setCharacterData(character);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Welcome to DND Character Wizard! 🧙</h1>
          <button className={styles.button} onClick={handleGenerateCharacter}>
            Generate a character
          </button>
          {characterData && (
            <article>
              <h2>Character Data:</h2>
              <CharacterSheet characterData={characterData} />
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
