import React from "react";
import Link from "next/link";

export default function CreateIntro() {
  return (
    <div>
      <p>
        We&apos;ll guide you through picking a class, species, background,
        stats, and name. You can change anything before finalising.
      </p>
      <Link href="/create/class">Begin: Pick a class</Link>
    </div>
  );
}
