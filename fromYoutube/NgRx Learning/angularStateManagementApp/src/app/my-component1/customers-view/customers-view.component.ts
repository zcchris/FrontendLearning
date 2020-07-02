import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Customer } from '../../models/customer';
import { CustomerRemove } from '../../myActions.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss'],
})
export class CustomersViewComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(private storeCus: Store<{ customers: Customer[] }>) {
    this.customers = this.storeCus.pipe(select('customers'));
  }

  removeCustomer(customerIndex) {
    this.storeCus.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit(): void {}
}
