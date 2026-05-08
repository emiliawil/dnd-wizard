"use client";

import React from "react";
import type {
  Background,
  CharacterAttributes,
  CharacterClass,
  Species,
} from "../lib/character/types";

export type DraftCharacter = {
  name?: string;
  class?: CharacterClass;
  buildName?: string;
  species?: Species;
  background?: Background;
  stats?: CharacterAttributes;
};

type Action =
  | { type: "setClass"; class: CharacterClass }
  | { type: "setBuild"; buildName: string }
  | { type: "setSpecies"; species: Species }
  | { type: "setBackground"; background: Background }
  | { type: "setStats"; stats: CharacterAttributes }
  | { type: "setName"; name: string }
  | { type: "reset" };

function reducer(state: DraftCharacter, action: Action): DraftCharacter {
  switch (action.type) {
    case "setClass":
      return { ...state, class: action.class, buildName: undefined };
    case "setBuild":
      return { ...state, buildName: action.buildName };
    case "setSpecies":
      return { ...state, species: action.species };
    case "setBackground":
      return { ...state, background: action.background };
    case "setStats":
      return { ...state, stats: action.stats };
    case "setName":
      return { ...state, name: action.name };
    case "reset":
      return {};
  }
}

type WizardContextValue = {
  draft: DraftCharacter;
  dispatch: React.Dispatch<Action>;
};

const WizardContext = React.createContext<WizardContextValue | null>(null);

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [draft, dispatch] = React.useReducer(reducer, {});
  return (
    <WizardContext.Provider value={{ draft, dispatch }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard(): WizardContextValue {
  const ctx = React.useContext(WizardContext);
  if (!ctx) {
    throw new Error("useWizard must be used inside WizardProvider");
  }
  return ctx;
}
