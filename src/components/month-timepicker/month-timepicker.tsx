import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'month-picker'
})

export class Monthpicker {
    
    @Prop() fullDate: Date;

    render() {
        const dateNumber = this.fullDate.getDate();
        const monthNumber = this.fullDate.getMonth();
        const yearNumber = this.fullDate.getFullYear();
        const monthName = getMonthName(monthNumber);

        return (
            <div class="container">
                <div class="date-picker-container">
                    <div class="date-picker-container__title">
                        <div class="some-month">
                            <div class="header">
                                {monthName}
                            </div>
                            <day-picker 
                                date={dateNumber} 
                                month={monthNumber}
                                year={yearNumber}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getMonthName(index) {
  return months[index-1];
}