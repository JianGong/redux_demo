import React from 'react'
import {ceshi} from '../actions/index'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Welcome = React.createClass({
  getDefaultProps() {
  	return {
  		ceshi: 'goog',
  	}
  },

  handleClick() {
  	this.props.actions.ceshi();
  	console.log('helloworld1');
  },

  render(){
    return (<div onClick={this.handleClick}>helloworld1{this.props.ceshi}</div>);
  }
})

const stateToProps = state => ({
	ceshi: state.hehe
});

const dispatchToProps = dispatch => ({
	actions: bindActionCreators({ ceshi }, dispatch)
});

export default connect(stateToProps, dispatchToProps)(Welcome);