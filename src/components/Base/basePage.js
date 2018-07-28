import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../store/actions';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import HeaderBar from './HeaderBar/headerBar';
import CalendarPicker from './Calendar/calendarPicker';
import Scheduler from './Scheduler/scheduler';
import { SchedulerData, DATE_FORMAT, ViewTypes } from 'react-big-scheduler';
import schedulerConfig from '../base/Scheduler/schedulerConfig';
import moment from 'moment';
import BookingDetail from './BookingDetail/bookingDetail';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => {
    return {
        selectedDate: state.calendarPickerState.selectedDate,
        schedulerEvents: state.schedulerData.schedulerEvents
    }
}

function initializeScheduler() {
    let schedulerData = new SchedulerData(this.props.selectedDate.format(DATE_FORMAT), ViewTypes.Day, false, false, schedulerConfig);
    moment.locale('en');
    schedulerData.setLocaleMoment(moment);

    let meetingRooms = [
        {
            id: 'mr_a',
            name: 'Entire ASE'
        },
        {
            id: 'mr_s',
            name: 'Stadium'
        },
        {
            id: 'mr_1',
            name: 'Co-Creation Room 1'
        },
        {
            id: 'mr_2',
            name: 'Co-Creation Room 2'
        }
    ];
    schedulerData.setResources(meetingRooms);

    let bookings = {
        id: 0,
        start: '2018-07-26 16:30:00',
        end: '2018-07-26 19:30:00',
        resourceId: 'mr_a',
        title: 'Booking by Gigi Teo',
        movable: false,
        bgColor: '#F759AB'
    }
    this.props.updateSchedulerEvents(bookings);
    schedulerData.setEvents(this.props.schedulerEvents);
    this.props.updateSchedulerData(schedulerData);
    
};

function prepareScheduler() {
    let schedulerData = new SchedulerData(this.props.selectedDate.format(DATE_FORMAT), ViewTypes.Day, false, false, schedulerConfig);
    moment.locale('en');
    schedulerData.setLocaleMoment(moment);

    let meetingRooms = [
        {
            id: 'mr_a',
            name: 'Entire ASE'
        },
        {
            id: 'mr_s',
            name: 'Stadium'
        },
        {
            id: 'mr_1',
            name: 'Co-Creation Room 1'
        },
        {
            id: 'mr_2',
            name: 'Co-Creation Room 2'
        }
    ];
    schedulerData.setResources(meetingRooms);

    // TEMPORARY:
    schedulerData.setEvents(this.props.schedulerEvents);
    this.props.updateSchedulerData(schedulerData);
}

class Base extends Component {
    componentWillMount() {
        initializeScheduler.bind(this)();
    }

    componentDidUpdate() {
        prepareScheduler.bind(this)();
    }

    render() {
        return (
            <div>
                <HeaderBar />
                <CalendarPicker />
                <Scheduler />
                <BookingDetail />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);