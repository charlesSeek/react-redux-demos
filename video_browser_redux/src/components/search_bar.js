import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchVideos} from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props);
    //this.state={term:''}
  }
  /*onInputChange(event) {
    this.setState({ term: event.target.value });
  }*/
  onFormSubmit(event) {
    event.preventDefault();
    const term = this.refs.term.value;
    this.props.fetchVideos(term);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Get snippet videos from youtube by key word"
          className="form-control"
          ref="term"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
export default connect(null, {fetchVideos})(SearchBar);

