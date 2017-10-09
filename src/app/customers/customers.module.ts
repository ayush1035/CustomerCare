import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component'
import {HttpService} from '../core/services/httpService';
import { HttpModule} from '@angular/http';

@NgModule({
    declarations: [CustomersComponent],
    imports: [FormsModule,HttpModule, CommonModule, RouterModule.forChild([{ path: 'customers', component: CustomersComponent }])],
    providers:[HttpService],

})


export class CustomersModule {

}