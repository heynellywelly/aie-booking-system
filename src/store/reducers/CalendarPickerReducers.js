import * as actionTypes from '../actions/ActionTypes';
import moment from 'moment';

export const calendarPickerState = function(state = {
    selectedDate: new moment()
}, action) {
    switch (action.type) {
        case 'SET_SELECTED_CALENDAR_DATE':
            return Object.assign({}, state, {
                selectedDate: action.selectedDate
            })
        default:
            return state;
    }
}