import React from 'react';
import Counter from './Counter2'

class CounterApp extends React.Component { 
	constructor(props){
		super(props);
		this.state = {
			count:1,
		};
	}
	increaseCount(){
		this.setState(({count}) => ({count: count + 1}));
	}
	render(){
		return (
		<Counter count = {this.state.count} />
		);
	}
}
export default CounterApp;