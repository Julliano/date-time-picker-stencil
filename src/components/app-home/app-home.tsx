// import { Component, h } from '@stencil/core';
import { Component, h} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    // const {selectedDate} = this.state;
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Date picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <slot></slot>
      </ion-content>
    ];
  }
}
