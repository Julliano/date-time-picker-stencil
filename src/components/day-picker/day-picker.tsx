import { Component, h, Prop, Event, EventEmitter, State} from '@stencil/core';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

@Component({
  tag: 'day-picker',
  styleUrl: 'day-picker.css'
})

export class DayPicker {
    constructor() {
        this.renderWeek = this.renderWeek.bind(this);
    }

    @Prop() date: number;
    @Prop() month: number;
    @Prop() year: number;
    @Prop() onDayCLick: Function;

    @State() hoveredDate: null;

    @Event() dayChange: EventEmitter;
    changeDay(date) {
        this.dayChange.emit(date);
    }

    render() {
        const weekDaysMarkup = weekdays.map(weekday => {
        return (
                <div aria-label={weekday} class="weekday">
                    {abbrevationFromWeekday(weekday)}
                </div>
            )
        })

        const weeks = getWeeksForMonth(this.month, this.year);

        const weeksMarkup = weeks.map((week, index) => {
        return (
                <div role="row" class="week" key={index}>
                    {week.map(this.renderWeek)}
                </div>
            )
        })

        return (
            <div>
                <div class="weekday-container"> {weekDaysMarkup} </div>
                {weeksMarkup}
            </div>
        );
    }

    renderWeek(fullDate, dayIndex) {
        if (fullDate === null) {
            return <div class="empty-day" key={dayIndex} />
        }

        const date = fullDate.getDate();
        let className = 'day';
        if (date === this.date) {
            className = 'day day--selected'
        }
        // return <button class="day" key={dayIndex}>{date}</button>
        return <button class={className}
                key={dayIndex}
                onClick={this.changeDay.bind(this, date)}>
                    {date}
                </button>
    }
}

function abbrevationFromWeekday(weekday) {
    return weekday.substring(0, 2);
}

const WEEK_LENGTH = 7;

function getWeeksForMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
        if (currentWeek.length === WEEK_LENGTH) {
        currentWeek = [];
        weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }

    return weeks;
}