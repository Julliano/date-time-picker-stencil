import { Component, h, Listen, State} from '@stencil/core';

@Component({
  tag: 'calendar-bundle'
})
export class CalendarBundle {

    @State() selectedDate: Date = new Date();
    @State() newDay: null;

    @Listen('onDayClick', { capture: true })
    changeMonth(data) {
        this.newDay = data.detail;
    }
    
    handleDayClick(newDay) {
        this.selectedDate = new Date(
            this.selectedDate.getFullYear(),
            this.selectedDate.getMonth(),
            newDay
        )
    }

    render() {
        return [
            <app-home>
                <month-picker fullDate={this.selectedDate}>
                    
                </month-picker>
            </app-home>
        ];
    }
}

