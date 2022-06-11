import React from "react";
import { Link } from "react-router-dom";

const List = ({ company }) => {
  return (
    <>
      <Link to={`/companies/${company.id}`}>
        <h3>{company.name}</h3>
      </Link>
      <h3>{company.address}</h3>
      <h3>{company.nit}</h3>
      <h3>{company.phone}</h3>
    </>
  );
};

export default List;
