import {hot} from 'react-hot-loader/root';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import Photos from './pages/Photos';

function App() {
	return (<div>
		<Header/>
		<Switch>
			<Route exact path="/"><Photos/></Route>
			<Route path="/"><Cart/></Route>
		</Switch>
	</div>);
}

export default hot(App);
