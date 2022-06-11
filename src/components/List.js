import React from "react";

const List = ({ company }) => {
  return (
    <div>
      <h3>{company.name}</h3>
      <h3>{company.address}</h3>
      <h3>{company.nit}</h3>
      <h3>{company.phone}</h3>
    </div>
  );
};

export default List;
