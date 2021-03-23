import React from "react";
import { Header } from "../header/header.components";
//-import { Connect } from "../connect";
import { Skills } from "../skills/skills.component";
import { Welcome } from "../welcome/welcome.component";
import { GridLayout } from "./structura.style";
//-import { GridLayout } from "./app.style";

export const Structure = () => {
  return (
    <GridLayout>
      <Welcome/>
    </GridLayout>
  );
};
