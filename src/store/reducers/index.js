import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as CalendarPickerReducers from './CalendarPickerReducers';
import * as SchedulerReducers from './SchedulerReducers';
import * as BookingDetailReducers from './BookingDetailReducers';

export default combineReducers(Object.assign
    (
        {router: routerReducer},
        CalendarPickerReducers,
        SchedulerReducers,
        BookingDetailReducers
    )
);