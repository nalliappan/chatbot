
import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  answer: any;

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "daf7d712a4bf4af792ed510c19182330"
      }).then(result => console.log(result));
    });
  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }

}
