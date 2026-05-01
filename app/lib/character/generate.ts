import { pickRandom, rollDie } from "../random";
import {
  ATTRIBUTE_KEYS,
  BACKGROUNDS,
  CLASSES,
  FIRST_NAMES,
  LAST_NAMES,
  SPECIES,
} from "./data";
import type {
  Background,
  Character,
  CharacterAttributes,
  CharacterClass,
  Species,
} from "./types";

export function generateCharacter(): Character {
  return {
    name: generateCharacterName(),
    class: generateCharacterClass(),
    level: 1,
    species: generateSpecies(),
    background: generateBackground(),
    stats: generateCharacterAttributes(),
  };
}

export function generateCharacterName(): string {
  return `${pickRandom(FIRST_NAMES)} ${pickRandom(LAST_NAMES)}`;
}

export function generateCharacterClass(): CharacterClass {
  return pickRandom(CLASSES);
}

export function generateSpecies(): Species {
  return pickRandom(SPECIES);
}

export function generateBackground(): Background {
  return pickRandom(BACKGROUNDS);
}

export function generateCharacterAttributes(): CharacterAttributes {
  const stats = {} as CharacterAttributes;
  for (const key of ATTRIBUTE_KEYS) {
    const rolls = [rollDie(6), rollDie(6), rollDie(6), rollDie(6)];
    rolls.sort((a, b) => b - a);
    stats[key] = rolls[0] + rolls[1] + rolls[2];
  }
  return stats;
}

export function getAttributeModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

/* Order of importance for stats for each class in D&D 5e:

- Artificer: INT, CON, DEX, WIS, CHA, STR
- Barbarian: STR, CON, DEX, WIS, CHA, INT
- Bard: CHA, DEX, CON, WIS, INT, STR
- Cleric: WIS, CON, STR, DEX, CHA, INT
- Druid: WIS, CON, DEX, STR, CHA, INT
- Fighter: STR or DEX (depending on fighting style), CON, WIS, CHA, INT
- Monk: DEX, WIS, CON, STR, CHA, INT
- Paladin: STR or CHA (depending on playstyle), CON, CHA or STR (depending on playstyle), WIS, DEX, INT
- Ranger: DEX or STR (depending on fighting style), CON, WIS, CHA, INT
- Rogue: DEX, INT or CHA (depending on playstyle), CON, WIS, CHA or INT (depending on playstyle), STR
- Sorcerer: CHA, CON, DEX, WIS, INT, STR
- Warlock: CHA, CON, DEX, WIS, INT, STR
- Wizard: INT, DEX, CON, WIS, CHA, STR

*/
