import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { WelcomeWrapper } from "../open/open.styled";

export const Review = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3800/reviews")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <WelcomeWrapper>
      <Header title={data?.sectionTitle} />
    </WelcomeWrapper>
  );
};
