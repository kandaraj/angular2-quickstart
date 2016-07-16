import { Component } from '@angular/core';
import {CustomersComponent} from './customers/customers.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent]
})

export class AppComponent {
  //[] property binding - Com to Dom
  //() event binding - Dom to Com
  title = "Customer app";
  name = 'ward';
  wardsColor = 'blue';

  changeSuitColor(){
    this.wardsColor = 'red';
  }
}
