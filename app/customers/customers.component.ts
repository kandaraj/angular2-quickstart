import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  customers = [
    {id:1, name: 'Siva'},
    {id:2, name: 'Picture'},
    {id:3, name: 'Me'},
    {id:4, name: 'Gooolge'},
    {id:5, name: 'Nance'}
  ]

  constructor() { }

    ngOnInit() { }

}
