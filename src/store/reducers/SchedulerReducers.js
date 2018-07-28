import * as actionTypes from '../actions/ActionTypes';

export const schedulerData = function(state = {
    schedulerData: null,
    schedulerEvents: []
}, action) {
    switch (action.type) {
        case 'SET_SCHEDULER_DATA':
            return Object.assign({}, state, {
                schedulerData: action.schedulerData
            })
        case 'SET_SCHEDULER_EVENTS':
            return Object.assign({}, state, {
                schedulerEvents: state['schedulerEvents'].concat(action.schedulerEvents)
            })
        default:
            return state;
    }
}