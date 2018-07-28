import * as actionTypes from './ActionTypes';

// Actions for the Booking Detail Dialog
export function closeTheDialog() {
    return {
        type: actionTypes.CLOSE_THE_DIALOG,
        isDialogOpen: false,
    }
}

export function openTheDialog() {
    return {
        type: actionTypes.OPEN_THE_DIALOG,
        isDialogOpen: true,
    }
}

// Actions for the Booking Detail
export function setApplicantName(name) {
    return {
        type: actionTypes.SET_APPLICANT_NAME,
        employeeName: name
    }
}

export function setMeetingRoomType(theMeetingRoom) {
    return {
        type: actionTypes.SET_MEETING_ROOM_TYPE,
        meetingRoomType: theMeetingRoom
    }
}

export function setMeetingStart(startTime) {
    return {
        type: actionTypes.SET_MEETING_START,
        meetingStart: startTime
    }
}

export function setMeetingEnd(endTime) {
    return {
        type: actionTypes.SET_MEETING_END,
        meetingEnd: endTime
    }
}

export function setMeetingPurpose(purpose) {
    return {
        type: actionTypes.SET_MEETING_PURPOSE,
        meetingPurpose: purpose
    }
}