import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { CustomersComponent } from '../customers/customers.component';
import {CustomersModule} from '../customers/customers.module'


@NgModule({
    declarations: [AboutPageComponent],
    imports: [FormsModule, CommonModule,CustomersModule, RouterModule.forChild([{ path: 'about-page', component: AboutPageComponent },{path:'customers',component:CustomersComponent}])]
})


export class AboutPageModule {

}