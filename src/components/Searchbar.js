import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearchTerm } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchSearchTerm(this.state.term);
    this.setState({
      term: '',
    });
  };
  onInputChange = e => {
    this.setState({
      term: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Type search term"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearchTerm }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
