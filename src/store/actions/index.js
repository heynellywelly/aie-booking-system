import { push, goBack, replace } from 'react-router-redux';
import * as CalendarPickerActions from './CalendarPickerActions';
import * as SchedulerActions from './SchedulerActions';
import * as BookingDetailActions from './BookingDetailActions';

export const ActionCreators = Object.assign({}, 
    {routerPush: push}, 
    {routerGoBack: goBack}, 
    {routerReplace: replace},
    CalendarPickerActions,
    SchedulerActions,
    BookingDetailActions
);