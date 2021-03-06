import React from "react";
import { Button } from "../button";
import * as HS from "./header.style";

export const Header = ({ title }) => {

  return (
    <HS.StyledHeader>
      <HS.StyledTitle>{title}</HS.StyledTitle>

      <Button type="disc" bgCuloare="#D52027">
        <span className="icon__youtube"></span>
      </Button>
    </HS.StyledHeader>
  );
};

