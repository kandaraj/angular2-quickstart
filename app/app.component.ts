import { Component } from '@angular/core';

import {CustomersComponent} from './customers/customers.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent]
})

export class AppComponent {
  title = "Customer app";
  name = 'ward';
  wardsColor = 'blue';

  changeSuitColor(){
    this.wardsColor = 'red';
  }
}
