import { Build, CharacterClass } from "./types";

export const CLASSES = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
] as const;

export const SPECIES = [
  "Aasimar",
  "Human",
  "Elf",
  "Dwarf",
  "Gnome",
  "Halfling",
  "Half-Orc",
  "Tiefling",
  "Dragonborn",
  "Genasi",
  "Goliath",
  "Kenku",
  "Tabaxi",
  "Half-Elf",
  "Firbolg",
  "Goblin",
  "Hobgoblin",
  "Kobold",
  "Orc",
  "Fairy",
] as const;

export const BACKGROUNDS = [
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Noble",
  "Outlander",
  "Sage",
  "Sailor",
  "Soldier",
  "Urchin",
] as const;

export const FIRST_NAMES = [
  "Arin",
  "Belar",
  "Cora",
  "Dain",
  "Elara",
  "Fenn",
  "Gara",
  "Haldor",
  "Iris",
  "Joran",
] as const;

export const LAST_NAMES = [
  "Brightwood",
  "Stormwind",
  "Shadowalker",
  "Ironfist",
  "Silverleaf",
  "Darkwater",
  "Sunblade",
  "Moonshadow",
  "Duskbane",
  "Fireforge",
] as const;

export const ATTRIBUTE_KEYS = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
] as const;

export const CLASS_BUILDS: Record<CharacterClass, readonly Build[]> = {
  Barbarian: [
    {
      name: "Barbarian",
      class: "Barbarian",
      priority: ["strength", "constitution", "dexterity", "wisdom", "charisma", "intelligence"],
    },
  ],
  Bard: [
    {
      name: "Bard",
      class: "Bard",
      priority: ["charisma", "dexterity", "constitution", "wisdom", "intelligence", "strength"],
    },
  ],
  Cleric: [
    {
      name: "Cleric",
      class: "Cleric",
      priority: ["wisdom", "constitution", "strength", "dexterity", "charisma", "intelligence"],
    },
  ],
  Druid: [
    {
      name: "Druid",
      class: "Druid",
      priority: ["wisdom", "constitution", "dexterity", "strength", "charisma", "intelligence"],
    },
  ],
  Fighter: [
    {
      name: "Strength Fighter",
      class: "Fighter",
      priority: ["strength", "constitution", "wisdom", "charisma", "intelligence", "dexterity"],
    },
    {
      name: "Dexterity Fighter",
      class: "Fighter",
      priority: ["dexterity", "constitution", "wisdom", "charisma", "intelligence", "strength"],
    },
  ],
  Monk: [
    {
      name: "Monk",
      class: "Monk",
      priority: ["dexterity", "wisdom", "constitution", "strength", "charisma", "intelligence"],
    },
  ],
  Paladin: [
    {
      name: "Strength Paladin",
      class: "Paladin",
      priority: ["strength", "constitution", "charisma", "wisdom", "dexterity", "intelligence"],
    },
    {
      name: "Charisma Paladin",
      class: "Paladin",
      priority: ["charisma", "constitution", "strength", "wisdom", "dexterity", "intelligence"],
    },
  ],
  Ranger: [
    {
      name: "Dexterity Ranger",
      class: "Ranger",
      priority: ["dexterity", "constitution", "wisdom", "charisma", "intelligence", "strength"],
    },
    {
      name: "Strength Ranger",
      class: "Ranger",
      priority: ["strength", "constitution", "wisdom", "charisma", "intelligence", "dexterity"],
    },
  ],
  Rogue: [
    {
      name: "Arcane Rogue",
      class: "Rogue",
      priority: ["dexterity", "intelligence", "constitution", "wisdom", "charisma", "strength"],
    },
    {
      name: "Charismatic Rogue",
      class: "Rogue",
      priority: ["dexterity", "charisma", "constitution", "wisdom", "intelligence", "strength"],
    },
  ],
  Sorcerer: [
    {
      name: "Sorcerer",
      class: "Sorcerer",
      priority: ["charisma", "constitution", "dexterity", "wisdom", "intelligence", "strength"],
    },
  ],
  Warlock: [
    {
      name: "Warlock",
      class: "Warlock",
      priority: ["charisma", "constitution", "dexterity", "wisdom", "intelligence", "strength"],
    },
  ],
  Wizard: [
    {
      name: "Wizard",
      class: "Wizard",
      priority: ["intelligence", "dexterity", "constitution", "wisdom", "charisma", "strength"],
    },
  ],
};