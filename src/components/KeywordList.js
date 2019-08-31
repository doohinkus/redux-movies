import React from 'react';
// import { useSelector } from 'react-redux';
// this is how to use hooks for grabbing state
// import selector
// add to component
// leaving it out  because it defeats the purpose of the container component
import Keyword from './Keyword'; 

function KeywordList({ keywordSuggestions, handleKeywordClick }) {
  // const keywords = useSelector(data => data.keywords)
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
            {/* {keywords && keywords.map(keyword => (
                  <Keyword 
                    id={keyword.id}
                    key={keyword.id}
                    name={keyword.name}
                    handleKeywordClick={handleKeywordClick}
                  />
                )
              )
            } */}
    </ul>
  );
}

export default KeywordList;