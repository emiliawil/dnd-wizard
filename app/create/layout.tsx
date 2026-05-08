import React from "react";
import { WizardProvider } from "./wizard-context";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WizardProvider>
      <section>
        <h1>Create your character</h1>
        {children}
      </section>
    </WizardProvider>
  );
}
