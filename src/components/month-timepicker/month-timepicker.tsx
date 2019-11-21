import { Component, h } from '@stencil/core';

@Component({
  tag: 'month-picker'
})

export class Monthpicker {

  render() {
    return (
      <div class="container">
          <div class="date-picker-container">
            <div class="date-picker-container__title">
              <div class="some-month">
                March
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
    );
  }
}