// React-related modules
import React from 'react';
import ReactDOM from 'react-dom';
// Browser history related module
import createHistory from 'history/createBrowserHistory';
// Redux / React-Redux related modules / React-Router-Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// Import the indexReducer
import indexReducer from './store/reducers';
// Import the MuiThemeProvider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Our main app
import App from './components/app';

// Create a MUI theme
const aieTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#9B0F56'
        },
        secondary: {
            main: '#37898C'
        }
    }
})

// To store our browser history
const history = createHistory();
// The middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Create our Redux store
let store = createStore(
    indexReducer,
    applyMiddleware(middleware)
);

ReactDOM.render(
    (   
        <Provider store={store}>
            <MuiThemeProvider theme={aieTheme}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </MuiThemeProvider>
        </Provider>
    ),
    document.querySelector('#app')
);