import React from "react";
import { StyledCelula } from './celula.styled';

export const Celula = ({ children, jc, span, height }) => {
  return <StyledCelula height={height} jc={jc} span={span}>{children}</StyledCelula>;
};
