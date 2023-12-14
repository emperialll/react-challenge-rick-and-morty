import React from "react";
import ItemContainer from "./ItemContainer";

const Body = ({ fullName, superPowers, weaknesses }) => {
  return (
    <div className='card-body'>
      <h2>{fullName}</h2>
      <ItemContainer items={superPowers}>Super Powers</ItemContainer>
      <ItemContainer items={weaknesses}>Weaknesses</ItemContainer>
    </div>
  );
};

export default Body;