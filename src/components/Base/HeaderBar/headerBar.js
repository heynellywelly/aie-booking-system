import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../store/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

class HeaderBar extends Component {
    render() {
        return (
            <div id="header_bar">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                        AIE Booking System
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(HeaderBar);