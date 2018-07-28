import * as actionTypes from './ActionTypes';

export function setSelectedCalendarDate(theDate) {
    return {
        type: actionTypes.SET_SELECTED_CALENDAR_DATE,
        selectedDate: theDate,
    }
}