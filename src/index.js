import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import AppContainer from './containers/AppContainer';
// Add these imports - Step 1
import { Provider } from 'react-redux';  
import { store } from './store/store';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import AppContainer from './containers/AppContainer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((  
	<BrowserRouter>
  		<Provider store={store}>
    		<Switch>
	      		<Route exact path='/Login' component={Login} />
	      		<Route exact path='/Home' component={Home} />
		      	<Route exact path='/Register' component={Register} />
		      	<Route exact path='/AppContainer' component={AppContainer} />
		    </Switch>
  		</Provider>
  	</BrowserRouter>),
  document.getElementById('root')
);
registerServiceWorker();
