import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: orange[900]
		},
		secondary: {
			main: lightGreen[800],			
		},
		tertiary: {
			main: yellow[500]
		}
	}
});
console.log(theme);
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
