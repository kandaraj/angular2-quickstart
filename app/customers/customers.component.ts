import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import {Observable} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  customers: any[];

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this._customerService.getCustomersRxobservable()
      .subscribe(
        (customers) => this.customers = customers,
        (err) => {
          console.log(err);
        }
      );

    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // Rx Observable version
    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err);
    //     return Observable.of(true);
    //   });
  }

}
