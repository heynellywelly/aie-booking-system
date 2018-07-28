import * as actionTypes from './ActionTypes';

export function updateSchedulerData(newSchedulerData) {
    return {
        type: actionTypes.SET_SCHEDULER_DATA,
        schedulerData: newSchedulerData,
    }
}

export function updateSchedulerEvents(newSchedulerEvents) {
    return {
        type: actionTypes.SET_SCHEDULER_EVENTS,
        schedulerEvents: newSchedulerEvents
    }
}