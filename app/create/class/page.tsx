"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CLASSES } from "../../lib/character/data";
import type { CharacterClass } from "../../lib/character/types";
import { useWizard } from "../wizard-context";

export default function ClassStep() {
  const { draft, dispatch } = useWizard();
  const router = useRouter();

  const handleSelect = (cls: CharacterClass) => {
    dispatch({ type: "setClass", class: cls });
  };

  const handleNext = () => {
    if (!draft.class) return;
    router.push("/create/species");
  };

  return (
    <div>
      <h2>Step 1 — Pick your class</h2>
      <p>
        First, you must pick a class. This determines your character&apos;s
        abilities and playstyle.
      </p>
      <fieldset>
        <legend>Class</legend>
        {CLASSES.map((cls) => (
          <label key={cls} style={{ display: "block" }}>
            <input
              type="radio"
              name="class"
              value={cls}
              checked={draft.class === cls}
              onChange={() => handleSelect(cls)}
            />
            {cls}
          </label>
        ))}
      </fieldset>
      <Link href="/create">← Back</Link>
      &emsp;
      <button onClick={handleNext} disabled={!draft.class}>
        Next →
      </button>
    </div>
  );
}
