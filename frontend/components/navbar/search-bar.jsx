import React from 'react';
import AutoSuggest from 'react-autosuggest';
import APIUtil from '../../util/api-util';
import { composerFormatShort } from '../../util/format-utils';

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
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  onSuggestionsFetchRequested({ value }) {
    APIUtil.search.searchTracks(value)
    .then(
      suggestions => this.setState({suggestions})
    )
  }

  clearInput() {
    this.setState({
      searchTerm: ''
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  getSuggestionValue(suggestion) {
    return suggestion.id;
  }

  renderSuggestion(suggestion) {
    return (
      <div className="suggestion-content">
        <i className="fa fa-play-circle fa-lg"></i>
        <div className="composer">
          {composerFormatShort(suggestion.display.composer)}</div>
        <div className="title">{suggestion.display.title}</div>
        <i className="fa fa-plus-circle fa-lg"></i>
      </div>
    );
  }

  onSuggestionSelected(e, { suggestion, suggestionValue: id }) {
    this.props.playSingleTrack(id);
    this.onSuggestionsClearRequested();
    this.clearInput();
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
          onSuggestionSelected={ this.onSuggestionSelected }
          inputProps={inputProps}
        />
      </div>
    );
  }
};

export default SearchBar;
