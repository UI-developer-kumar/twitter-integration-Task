import React from 'react';
import { useSelector } from 'react-redux';

const SuggestionList = () => {
  const suggestions = useSelector((state) => state.search.suggestions);

  return (
    <ul className="suggestion-list">
      {suggestions.length === 0 ? (
        <li>No suggestions</li>
      ) : (
        suggestions.map((account) => (
          <li key={account.id}>
            <div className="suggestion-name">{account.name}</div>
            <div className="suggestion-tags">{account.hashtags.join(' ')}</div>
          </li>
        ))
      )}
    </ul>
  );
};

export default SuggestionList;