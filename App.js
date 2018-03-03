import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './app/Home';
import Video from './app/Video';

const App = StackNavigator({
	Home: {screen: Home},
	Video: {screen: Video, title:"Second screen"}
});

export default App;

AppRegistry.registerComponent('hybrid', () => App);
