import React, { Component } from 'react';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <div className="search-panel">
        <label className="search-panel__label">
            <input type="text"
              className="search-panel__input"
              placeholder="Search"
              value={this.state.term}
              onChange={ this.onTermChange } />
            <i className="material-icons search-panel__icon">search</i>
        </label>
      </div>
    );
  };
}
