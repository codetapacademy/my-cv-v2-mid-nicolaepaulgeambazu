import styled, { css } from "styled-components";

export const CommonTitlu = css`
  color: #707070;
  font-weight: 500;
  text-align: center;
`;

export const Nume = styled.div`
  ${CommonTitlu}
  font-size: 48px;
`;

export const Job = styled.div`
  ${CommonTitlu}
  font-size: 36px;
`;

export const Subtitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #808080;
  margin-top: 20px;
`;

export const DescriptionBox = styled.div`
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 20px;
  color: #707070;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px
`;
