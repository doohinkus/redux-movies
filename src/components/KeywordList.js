import React from 'react';
import Keyword from './Keyword'; 

function KeywordList({ keywordSuggestions, handleKeywordClick }) {
  return (
    <ul className="list-group">
            {keywordSuggestions && keywordSuggestions.map(keyword => (
                  <Keyword 
                    id={keyword.id}
                    key={keyword.id}
                    name={keyword.name}
                    handleKeywordClick={handleKeywordClick}
                  />
                )
              )
            }
    </ul>
  );
}

export default KeywordList;