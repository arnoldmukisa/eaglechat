import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// const Calendar = withDragAndDrop(BigCalendar);

function EventAgenda({ event }) {
	return (
		<span>
			<em style={{ color: 'magenta' }}>{event.title}</em>
			<p>{event.desc}</p>
		</span>
	);
}

class FullCalender extends Component {
	render() {
		const calendarOptions = {
			popup: true,
			selectable: true,
			step: 60,
			timeslots: 2,
			className: 'mateCalendar',
			agenda: {
				event: EventAgenda,
			},
		};
		return <BigCalendar {...calendarOptions} {...this.props} />;
	}
}
// const CalendarExample = DragDropContext(FullCalender);
export default FullCalender;
export { BigCalendar };
