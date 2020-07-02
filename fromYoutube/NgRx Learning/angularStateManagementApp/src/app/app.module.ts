import { CustomerReducer, counterReducer } from './myReducer.reducer';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerAddComponent } from './my-component1/customer-add/customer-add.component';
import { CustomersViewComponent } from './my-component1/customers-view/customers-view.component';
import { FormsModule } from '@angular/forms';
import { MyComponent1Component } from './my-component1/my-component1/my-component1.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent1Component,
    CustomersViewComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, customers: CustomerReducer }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
