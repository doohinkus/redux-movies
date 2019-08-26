import React from 'react';

function Keyword({ id, name, handleKeywordClick }){
  function handleClick(){
    handleKeywordClick(id, name);
  }
  return (
    <React.Fragment>
       <li 
         className="list-group-item pointer keyword"
         onClick={handleClick}
         tabIndex={0}

        >
          {name}
        </li>
    </React.Fragment>
  )
}

export default Keyword;