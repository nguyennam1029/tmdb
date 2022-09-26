import React from "react";

import { useSelector } from "react-redux";
export const HeroDetail = () => {
  const { selectItem } = useSelector((state) => state);

  return (
    <div>
      <h2>{selectItem.name}</h2>
      <img src={selectItem.imgUrl} alt="" />
    </div>
  );
};
