import React from 'react';
import AutoSuggest from 'react-autosuggest';

const SearchBar = () => (
  <div className="search-bar-container">
    <AutoSuggest
    suggestions={[]}
    onSuggestionsFetchRequested={console.log}
    onSuggestionsClearRequested={console.log}
    getSuggestionValue={console.log}
    renderSuggestion={console.log}
    inputProps={{value: 'cat', onChange: console.log}}
  />
  </div>
);

export default SearchBar;
