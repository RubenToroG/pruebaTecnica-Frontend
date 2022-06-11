import React, { useState, useEffect } from "react";
import List from "../components/List";

const CompaniesList = () => {
  let [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  let getCompanies = async () => {
    let response = await fetch("http://localhost:8000/api/companies/");
    let data = await response.json();
    setCompanies(data);
  };

  return (
    <div>
      <div className="list">
        {companies.map((company, index) => (
          <List key={index} company={company} />
        ))}
      </div>
    </div>
  );
};
export default CompaniesList;
