import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../store/actions';
import { Route } from 'react-router';
import Base from './Base/basePage';

var axios = require('axios');

const mapStateToProps = state => {
    return {
        routingState: state.router,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

class App extends Component {
    render() {
        // A variable to store the desired Route component to render
        let route = null;

        route = <Route path='/' render={() => {return (<Base />)}} />;

        return (
            <div>
                {route}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);