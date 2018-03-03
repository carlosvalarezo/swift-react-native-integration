import React, {Component} from 'react';
import {Button, Platform, Text, View} from 'react-native';


export default class Home extends Component<{}>{
	static navigationOptions = {
		title: 'Welcome'
	};

	constructor(props){
		super(props);
	}

	render(){
		const {navigate} = this.props.navigation;
		return(<View>
				<Button title="Open camera" onPress={() => navigate('Video',{text:""})}/>
			</View>);
	}
}
