import styled from "styled-components";

export const expListWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  grid-template: 1fr auto 1fr;
  border: 1px solid black;
  margin-left: 10px;
`;

export const expList = styled.div`
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  width: 50px;
  margin: 50px;
`;
export const exptitle = styled.div`
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  width: 100px;
`;

export const icon = styled.div`
  display: block;
  font-size: 15px;
  border-radius: 50%;
  margin: 5px;
  width: 50px;
  height: 50px;
  background: url(${({ logo }) => (logo ? logo : "")});
`;

export const expListImage = styled.div`
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
`;

export const buttonel = styled.div`
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  width: 55px;
  height: 50px;
  margin: 40px;
`;

export const chevron = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  margin: auto;
  cursor: pointer;
  border:1px solid black ;
`;

export const wrapCv = styled.div`
  background-color: #fff;
  border: 0;
`;
