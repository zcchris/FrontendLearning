import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Customer } from 'src/app/models/customer';
import { CustomerAdd } from '../../myActions.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent {
  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = this.store.pipe(select('customers'));
  }

  AddCustomer(customerName: string) {
    const customer = new Customer(customerName);

    this.store.dispatch(new CustomerAdd(customer));
  }
}
