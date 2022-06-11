import React, { useState, useEffect } from "react";
import List from "../components/List";

const CompaniesList = () => {
  let [companies, setCompanies] = useState(null);

  useEffect(() => {
    getCompanies();
  }, []);

  let getCompanies = async () => {
    let response = await fetch("http://localhost:8000/api/companies/");
    let data = await response.json();
    setCompanies(data);
  };

  let updateCompany = async () => {
    fetch(`/api/notes/${companies.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companies),
    });
  };

  let handleChange = (value) => {
    setCompanies((companies) => ({ ...companies, body: value }));
    console.log("Handle Change:", companies);
  };

  return (
    <div className="company">
      <div className="company-list">
        {companies.map((company, index) => (
          <List key={index} company={company} />
        ))}
      </div>
    </div>
  );
};
export default CompaniesList;
