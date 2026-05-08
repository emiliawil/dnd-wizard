"use client";
import React from "react";
import styles from "./page.module.css";
import { Character } from "../lib/character/types";
import { generateCharacter } from "../lib/character/generate";
import CharacterSheet from "../components/CharacterSheet";
import Link from "next/link";

export default function RandomPage() {
  const [characterData, setCharacterData] = React.useState<Character | null>(
    null,
  );

  const handleGenerateCharacter = () => {
    const character = generateCharacter();
    setCharacterData(character);
  };

  return (
    <div>
      <Link href="/">← Back to home</Link>
      <h1>Random Character Generator</h1>
      <p>Click the button below to generate a random DND character.</p>
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
  );
}
