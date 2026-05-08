import { ATTRIBUTE_KEYS, BACKGROUNDS, CLASSES, SPECIES } from "./data";

export type CharacterClass = (typeof CLASSES)[number];
export type Species = (typeof SPECIES)[number];
export type Background = (typeof BACKGROUNDS)[number];
export type AttributeKey = (typeof ATTRIBUTE_KEYS)[number];

export type CharacterAttributes = Record<AttributeKey, number>;

export type Character = {
  name: string;
  class: CharacterClass;
  buildName: string;
  level: number;
  species: Species;
  background: Background;
  stats: CharacterAttributes;
};

export type Build = {
  name: string;
  class: CharacterClass;
  priority: AttributeKey[];
};
