/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface CalendarBundle {}
  interface DayPicker {
    'date': number;
    'month': number;
    'year': number;
  }
  interface MonthPicker {
    'fullDate': Date;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLCalendarBundleElement extends Components.CalendarBundle, HTMLStencilElement {}
  var HTMLCalendarBundleElement: {
    prototype: HTMLCalendarBundleElement;
    new (): HTMLCalendarBundleElement;
  };

  interface HTMLDayPickerElement extends Components.DayPicker, HTMLStencilElement {}
  var HTMLDayPickerElement: {
    prototype: HTMLDayPickerElement;
    new (): HTMLDayPickerElement;
  };

  interface HTMLMonthPickerElement extends Components.MonthPicker, HTMLStencilElement {}
  var HTMLMonthPickerElement: {
    prototype: HTMLMonthPickerElement;
    new (): HTMLMonthPickerElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'calendar-bundle': HTMLCalendarBundleElement;
    'day-picker': HTMLDayPickerElement;
    'month-picker': HTMLMonthPickerElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface CalendarBundle {}
  interface DayPicker {
    'date'?: number;
    'month'?: number;
    'onDayChange'?: (event: CustomEvent<any>) => void;
    'year'?: number;
  }
  interface MonthPicker {
    'fullDate'?: Date;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'calendar-bundle': CalendarBundle;
    'day-picker': DayPicker;
    'month-picker': MonthPicker;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'calendar-bundle': LocalJSX.CalendarBundle & JSXBase.HTMLAttributes<HTMLCalendarBundleElement>;
      'day-picker': LocalJSX.DayPicker & JSXBase.HTMLAttributes<HTMLDayPickerElement>;
      'month-picker': LocalJSX.MonthPicker & JSXBase.HTMLAttributes<HTMLMonthPickerElement>;
    }
  }
}


