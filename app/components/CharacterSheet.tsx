import React from "react";
import { ATTRIBUTE_KEYS } from "../lib/character/data";
import { getAttributeModifier } from "../lib/character/generate";
import type { Character } from "../lib/character/types";

function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function CharacterSheet({ characterData }: { characterData: Character }) {
  return (
    <>
      <h2>{characterData.name}</h2>
      <p>Class: {characterData.class}</p>
      <p>Level: {characterData.level}</p>
      <p>Species: {characterData.species}</p>
      <p>Background: {characterData.background}</p>
      <h3>Attributes:</h3>
      <ul>
        {ATTRIBUTE_KEYS.map((key) => {
          const score = characterData.stats[key];
          return (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {score} (
              {formatModifier(getAttributeModifier(score))})
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CharacterSheet;
