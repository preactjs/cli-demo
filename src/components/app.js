import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Other from '../routes/other';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Router>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Other path="/other" />
				</Router>
			</div>
		);
	}
}
