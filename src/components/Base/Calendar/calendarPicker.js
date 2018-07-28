import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../store/actions';
import { Route } from 'react-router';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import calendarTheme from '../../../../assets/components/calendarPickerStyle';
import MediaQuery from 'react-responsive';
import moment from 'moment';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

// Get today's date
var today = new moment();

class CalendarPicker extends Component {
    render() {
        return (
            <div style={{float: 'left', margin: '10px'}}>
                <MediaQuery minDeviceWidth={1224}>
                    <InfiniteCalendar
                        width={0.3 * window.innerWidth}
                        height={0.6 * window.innerHeight}
                        selected={today}
                        theme={calendarTheme}
                        onSelect={(newSelectedDate) => {this.props.setSelectedCalendarDate(new moment(newSelectedDate))}}
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <InfiniteCalendar
                        width={0.3 * window.innerWidth}
                        height={0.6 * window.innerHeight}
                        selected={today}
                        theme={calendarTheme}
                        onSelect={(newSelectedDate) => {this.props.setSelectedCalendarDate(new moment(newSelectedDate))}}
                    />
                </MediaQuery>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(CalendarPicker);