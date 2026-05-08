import { pickRandom, rollDie } from "../random";
import {
  BACKGROUNDS,
  CLASSES,
  CLASS_BUILDS,
  FIRST_NAMES,
  LAST_NAMES,
  SPECIES,
} from "./data";
import type {
  AttributeKey,
  Background,
  Character,
  CharacterAttributes,
  CharacterClass,
  Species,
} from "./types";

export function generateCharacter(): Character {
  const characterClass = generateCharacterClass();
  const build = pickRandom(CLASS_BUILDS[characterClass]);
  const rolls = rollStats();
  return {
    name: generateCharacterName(),
    class: characterClass,
    buildName: build.name,
    level: 1,
    species: generateSpecies(),
    background: generateBackground(),
    stats: assignStats(rolls, build.priority),
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

export function rollStats(): number[] {
  const stats: number[] = [];
  for (let i = 0; i < 6; i++) {
    const rolls = [rollDie(6), rollDie(6), rollDie(6), rollDie(6)];
    rolls.sort((a, b) => b - a);
    stats.push(rolls[0] + rolls[1] + rolls[2]);
  }
  return stats;
}

export function assignStats(
  rolls: number[],
  priority: AttributeKey[],
): CharacterAttributes {
  const sorted = [...rolls].sort((a, b) => b - a);
  const stats = {} as CharacterAttributes;
  priority.forEach((key, i) => {
    stats[key] = sorted[i];
  });
  return stats;
}

export function getAttributeModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}
