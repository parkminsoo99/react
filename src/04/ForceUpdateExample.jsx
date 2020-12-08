import React from 'react';
class ForceUpdateExapme extends React.Component { 
constructor(props){
	super(props);
	
	this.loading = true;
	this.formData ='no data';

	this.handleData = this.handleData.bind(this);
	
	setTimeout(this.handleData,4000);
}
	handleData() {
		const data ='new data';
		this.loading = false;
		this.formData= data + this.formData;
		this.forceUpdate();
		console.log ('loading 값', this.loading);
	}
	render() {
		return (
		<div><span>로딩중 : {String(this.loading)}</span><span>결과 : {this.formData}</span></div>
			);
		}
	}

export default ForceUpdateExapme;