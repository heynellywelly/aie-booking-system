import { ViewTypes, SummaryPos } from 'react-big-scheduler';

export default {
    schedulerWidth: 0.55 * window.innerWidth,
    schedulerMaxHeight: 0,
    tableHeaderHeight: 40,

    agendaResourceTableWidth: 160,
    agendaMaxEventWidth: 100,

    dayResourceTableWidth: 0,
    weekResourceTableWidth: 0,
    monthResourceTableWidth: 0,
    quarterResourceTableWidth: 0,
    yearResourceTableWidth: 0,

    dayCellWidth: 30,
    weekCellWidth: 120,
    monthCellWidth: 80,
    quarterCellWidth: 80,
    yearCellWidth: 80,

    dayMaxEvents: 99,
    weekMaxEvents: 99,
    monthMaxEvents: 99,
    quarterMaxEvents: 99,
    yearMaxEvents: 99,

    eventItemHeight: 22,
    eventItemLineHeight: 24,
    dayStartFrom: 8,
    dayStopTo: 23,
    defaultEventBgColor: '#80C5F6',
    selectedAreaColor: '#7EC2F3',
    nonWorkingTimeHeadColor: '#999999',
    nonWorkingTimeHeadBgColor: '#fff0f6',
    nonWorkingTimeBodyBgColor: '#fff0f6',
    summaryColor: '#666',
    summaryPos: SummaryPos.TopRight,

    startResizable: true,
    endResizable: true,
    movable: true,
    creatable: true,
    crossResourceMove: true,
    checkConflict: false,
    scrollToTodayEnabled: true,
    eventItemPopoverEnabled: true,
    calendarPopoverEnabled: false,
    recurringEventsEnabled: true,

    resourceName: 'Meeting Room',
    taskName: 'Task Name',
    agendaViewHeader: 'Agenda',
    addMorePopoverHeaderFormat: 'MMM D, YYYY dddd',
    eventItemPopoverDateFormat: 'MMM D',
    nonAgendaDayCellHeaderFormat: 'ha',
    nonAgendaOtherCellHeaderFormat: 'ddd M/D',

    minuteStep: 30,

    views: [
        {viewName: 'Today', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false}
    ],
}