import React from 'react';

const CompanyDropdownList = ({ companies, getCompany }) => {
  function handleChange(e){
    getCompany(e.target.value);
  }
  return (
    <select className="custom-select mb-2 mr-sm-2 mt-2" onChange={handleChange}>
      <option value="null" tabIndex={0}>Make Selection</option>
      {companies.map(company => {
        return (
          <option key={company.id} value={company.id} tabIndex={0}>{company.name}</option>
        )
      })}
    </select>
  )
};
export default CompanyDropdownList;