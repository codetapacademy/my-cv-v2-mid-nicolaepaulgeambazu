import React from "react";
import {
  StyledButton,
  StyledDisc,
  StyledPillLink,
  StyledChevron,
} from "./button.style";

export const Button = ({
  children,
  type,
  bgCuloare,
  size,
  onClick,
  link,
  icon,
}) => {
  return type === "disc" ? (
    <StyledDisc size={size} color={bgCuloare} onClick={onClick}>
      <span className={icon} />
      {children}
    </StyledDisc>
  ) : type === "chevron" ? (
    <StyledChevron size={size} color={bgCuloare} onClick={onClick}>
      <span className={icon} />

      {children}
    </StyledChevron>
  ) : type === "link" ? (
    <StyledPillLink href={link} target="_blank" download>
      {children}
    </StyledPillLink>
  ) : (
    <StyledButton color={bgCuloare}>{children}</StyledButton>
  );
};
