import * as actionTypes from '../actions/ActionTypes';

export const bookingDetailDialog = function(state = {
    isDialogOpen: false,
}, action) {
    switch (action.type) {
        case 'CLOSE_THE_DIALOG':
            return Object.assign({}, state, {
                isDialogOpen: action.isDialogOpen
            })
        case 'OPEN_THE_DIALOG':
            return Object.assign({}, state, {
                isDialogOpen: action.isDialogOpen
            })
        default:
            return state;
    }
}

export const bookingDetails = function(state = {
    employeeName: '',
    meetingRoomType: '',
    meetingStart: '',
    meetingEnd: '',
    meetingPurpose: ''
}, action) {
    switch (action.type) {
        case 'SET_APPLICANT_NAME':
            return Object.assign({}, state, {
                employeeName: action.employeeName
            })
        case 'SET_MEETING_ROOM_TYPE':
            return Object.assign({}, state, {
                meetingRoomType: action.meetingRoomType
            })
        case 'SET_MEETING_START':
            return Object.assign({}, state, {
                meetingStart: action.meetingStart
            })
        case 'SET_MEETING_END':
            return Object.assign({}, state, {
                meetingEnd: action.meetingEnd
            })
        case 'SET_MEETING_PURPOSE':
            return Object.assign({}, state, {
                meetingPurpose: action.meetingPurpose
            })
        default:
            return state;
    }
}