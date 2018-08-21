import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultList extends Component {
  renderPost = post => {
    const url = `https://www.reddit.com${post.data.permalink}`;
    return (
      <li key={post.data.id}>
        <a href={url}>{post.data.title}</a>
      </li>
    );
  };
  render() {
    console.log(this.props.search);
    return (
      <div>
        <ul>{this.props.search.map(this.renderPost)}</ul>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(ResultList);
