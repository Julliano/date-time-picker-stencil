// import { Component, h } from '@stencil/core';
import { Component, h/*, Watch, Event, EventEmitter */} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  // @Element() el: HTMLElement;

  // @Prop() selected: string;
  // @Prop() step: number = 15;
  // @Prop() clock24: boolean = false;
  // @Prop() name: string;
  // @Prop() class: string;
  // @Prop() label: string = 'Pick a time';


  // _getOptions () {
  //   const start = 0;
  //   const total = Math.round((60/this.step)*24);

  //   let hours = [];
  //   for (let i=start; i<total; i++) {
  //     hours.push(i*this.step);
  //   }
  //   return hours;
  // }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Date picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="container">
          <div class="date-picker-container">
            <div class="date-picker-container__title">
              <div class="some-month">
                March
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    ];
  }
}
