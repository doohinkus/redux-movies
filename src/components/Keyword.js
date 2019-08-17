import React from 'react';

function Keyword({ id, name, handleKeywordClick }){
  const style = {
    cursor: 'pointer'
  }
  function handleClick(){
    handleKeywordClick(id, name);
  }
  return (
    <React.Fragment>
       <div 
         className="alert alert-info mb-1" 
         style={style}
         onClick={handleClick}
        >
          {name}
        </div>
    </React.Fragment>
  )
}

export default Keyword;