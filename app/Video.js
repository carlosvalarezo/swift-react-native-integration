import React, {Component} from 'react';
import {Button, Platform, Text, View, NativeModules} from 'react-native';

export default class Video extends Component<{}>{
	static navigationOptions = {
		title:'Second screeen'
	};

	constructor(props){
		super(props);
		this.state = {
			titleText:"Hello world"
		};
	}

	render(){
		var Print = NativeModules.Print;
		return (<View>
				<Button title="print text" onPress={()=>{Print.printJS('Lorenxo');}}/>
			</View>);
		
	}
}
