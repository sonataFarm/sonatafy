import React from 'react';
import AutoSuggest from 'react-autosuggest';
import APIUtil from '../../util/api-util';

const languages = []
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: APIUtil.search.searchTracks(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion.name}</div>;
  }

  render() {
    const { suggestions, searchTerm } = this.state;
    const inputProps = {
      placeholder: 'Search Tracks',
      value: searchTerm,
      onChange: this.handleChange
    };

    return (
      <div className="search-bar-container">
        <AutoSuggest
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
          onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
          getSuggestionValue={ this.getSuggestionValue }
          renderSuggestion={ this.renderSuggestion }
          inputProps={inputProps}
        />
      </div>
    );
  }
};

export default SearchBar;
