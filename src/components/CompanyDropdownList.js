import React from 'react';

const CompanyDropdownList = ({ companies, getCompany }) => {
  function handleChange(e){
    getCompany(e.target.value);
  }
  return (
    <select className="custom-select mb-2 mr-sm-2" onChange={handleChange}>
      <option value="null">Make Selection</option>
      {companies.map(company => {
        return (
          <option key={company.id} value={company.id}>{company.name}</option>
        )
      })}
    </select>
  )
};
export default CompanyDropdownList;