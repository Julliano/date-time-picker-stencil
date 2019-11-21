import { Component, h, Listen, State} from '@stencil/core';

@Component({
  tag: 'calendar-bundle'
})
export class CalendarBundle {

    @State() selectedDate: Date = new Date();
    @State() newDay: null;

    @Listen('dayChange', { capture: true })
    handleDayClick(newDay) {
        this.selectedDate = new Date(
            this.selectedDate.getFullYear(),
            this.selectedDate.getMonth(),
            newDay.detail
        )
    }

    render() {
        return [
            <app-home>
                <month-picker fullDate={this.selectedDate} />
            </app-home>
        ];
    }
}

