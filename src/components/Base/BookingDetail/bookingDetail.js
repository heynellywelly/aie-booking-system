import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../store/actions';
import { Route } from 'react-router';
import 'react-infinite-calendar/styles.css';
import MediaQuery from 'react-responsive';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = state => {
    return {
        isDialogOpen: state.bookingDetailDialog.isDialogOpen,
        applicantName: state.bookingDetails.employeeName,
        meetingRoomType: state.bookingDetails.meetingRoomType,
        meetingStart: state.bookingDetails.meetingStart,
        meetingEnd: state.bookingDetails.meetingEnd,
        meetingPurpose: state.bookingDetails.meetingPurpose,
        schedulerData: state.schedulerData.schedulerData
    }
}

class BookingDetail extends Component {
    render() {
        let cancelDialog = () => {
            // Clear the Redux store's state for the Booking Details
            this.props.setApplicantName('');
            this.props.setMeetingRoomType('');
            this.props.setMeetingStart('');
            this.props.setMeetingEnd('');
            this.props.setMeetingPurpose('');
            // Close the dialog after
            this.props.closeTheDialog();
        };

        let bookRoom = () => {
            let newFreshId = 0;
            this.props.schedulerData.events.forEach((item) => {
                if(item.id >= newFreshId)
                    newFreshId = item.id + 1;
            });

            let meetingRoomMapping = {
                "Entire ASE": "mr_a",
                "Stadium": "mr_s",
                "Co-Creation Room 1": "mr_1",
                "Co-Creation Room 2": "mr_2"
            }
    
            let newEvent = {
                id: newFreshId,
                title: this.props.meetingPurpose,
                start: this.props.meetingStart,
                end: this.props.meetingEnd,
                resourceId: meetingRoomMapping[this.props.meetingRoomType],
                bgColor: '#BFBAD1',
                movable: false
            }
    
            this.props.updateSchedulerEvents(newEvent);

            cancelDialog();
        }

        return (
            <Dialog open={this.props.isDialogOpen}>
                <DialogTitle id="booking_detail_title">Meeting Room Booking Request</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the application form for your AIE Meeting Room booking request.
                    </DialogContentText>
                    <TextField
                        id="emp_name"
                        label="Employee Name"
                        autoFocus
                        margin="normal"
                        fullWidth
                        required={true}
                        value={this.props.applicantName}
                        onChange={(e) => {this.props.setApplicantName(e.target.value)}}
                    />
                    <TextField
                        id="meeting_room"
                        label="Meeting Room Type"
                        margin="normal"
                        fullWidth
                        value={this.props.meetingRoomType}
                        disabled={true}
                    />
                    <TextField
                        id="meeting_date"
                        label="Date"
                        margin="normal"
                        fullWidth
                        value={moment(this.props.meetingStart).format('Do MMMM YYYY')}
                        disabled={true}
                    />
                    <TextField
                        id="meeting_time"
                        label="Time"
                        margin="normal"
                        fullWidth
                        value={moment(this.props.meetingStart).format('hh:mm a') + " till " + moment(this.props.meetingEnd).format('hh:mm a')}
                        disabled={true}
                    />
                    <TextField
                        id="meeting_purpose"
                        label="Meeting Purpose"
                        margin="normal"
                        fullWidth
                        multiline={true}
                        required={true}
                        value={this.props.meetingPurpose}
                        onChange={(e) => {this.props.setMeetingPurpose(e.target.value)}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={cancelDialog} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={bookRoom} color="secondary">
                        Book That Room!
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);