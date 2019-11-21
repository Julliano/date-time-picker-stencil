import { Component, h } from '@stencil/core';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

@Component({
  tag: 'day-picker',
  styleUrl: 'day-picker.css'
})

export class DayPicker {
  constructor() {
    this.renderWeek = this.renderWeek.bind(this);
  }

  render() {
    const weekDaysMarkup = weekdays.map(weekday => {
      return (
        <div aria-label={weekday} class="weekday">
          {abbrevationFromWeekday(weekday)}
        </div>
      )
    })

    const weeks = getWeeksForMonth(2, 2019);
    console.log(weeks);

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
    return <button class="day" key={dayIndex}>{date}</button>
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