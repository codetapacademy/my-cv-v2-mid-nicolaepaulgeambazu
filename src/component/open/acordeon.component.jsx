import React, { useEffect, useState } from "react";
import { Subtitlu } from "../titlu/titlu.style";
import AcordeonData from "./acordeondata";

export const Acordeon = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3800/openSources")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      {data?.projects?.project.map((item) => {
        console.log(item);
        return (
          <>
            <AcordeonData project={item} />
          </>
        );
      })}
    </div>
  );
};

export default Acordeon;
