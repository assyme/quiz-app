import React, {Component} from 'react';
import styles from './styles.css';
import logo from '../../logo.svg';
import Header from "../Header/header.container";


export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="App">
				<Header></Header>
				{/*<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>*/}
			</div>
		);
	}
}