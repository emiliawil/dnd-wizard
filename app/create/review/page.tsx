"use client";

import React from "react";
import Link from "next/link";
import { useWizard } from "../wizard-context";

export default function ReviewStep() {
  const { draft, dispatch } = useWizard();

  return (
    <div>
      <h2>Review your character</h2>
      <ul>
        <li>Name: {draft.name ?? "—"}</li>
        <li>
          Class: {draft.class ?? "—"}
          {draft.buildName && draft.buildName !== draft.class
            ? ` (${draft.buildName})`
            : ""}
        </li>
        <li>Species: {draft.species ?? "—"}</li>
        <li>Background: {draft.background ?? "—"}</li>
        <li>Stats: {draft.stats ? "rolled" : "—"}</li>
      </ul>
      <Link href="/create/class">← Edit class</Link>
      <button onClick={() => dispatch({ type: "reset" })}>Start over</button>
    </div>
  );
}
