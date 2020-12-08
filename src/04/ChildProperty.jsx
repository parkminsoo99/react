import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildPropery extends Component {
	render(){
		return <div>{this.props.children}</div>
	}
}
ChildPropery.propTypes={
	children : PropTypes.node,
};

export default ChildPropery;