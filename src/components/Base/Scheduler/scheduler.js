import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../store/actions';
import { Route } from 'react-router';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Scheduler from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => {
    return {
        schedulerData: state.schedulerData.schedulerData
    }
}

class RoomScheduler extends Component {
    render() {
        let newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
            this.props.setMeetingRoomType(slotName);
            this.props.setMeetingStart(start);
            this.props.setMeetingEnd(end);
            this.props.openTheDialog();
        };

        return (
            <div className="scheduler" style={{float: 'left', margin: '10px'}}>
                <Scheduler
                    schedulerData={this.props.schedulerData}
                    newEvent={newEvent}
                />
            </div>
        )
    };
}

RoomScheduler = DragDropContext(HTML5Backend)(RoomScheduler);
export default connect(mapStateToProps, mapDispatchToProps)(RoomScheduler);