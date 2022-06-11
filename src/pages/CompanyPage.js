import React, { useEffect, useState } from "react";

const CompanyPage = ({ match }) => {
  let companyId = match.params.id;
  let { company, setCompany } = useState(null);

  useEffect(() => {
    getCompany();
  }, [companyId]);

  let getCompany = async () => {
    let response = fetch(`http://localhost:8000/api/companies/${companyId}/`);
    let data = await response.json();
    setCompany(data);
  };

  return (
    <div>
      <p>{company?.name}</p>
    </div>
  );
};

export default CompanyPage;
