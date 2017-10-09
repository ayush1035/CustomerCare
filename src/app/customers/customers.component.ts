import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../core/ICustomer'
import {HttpService} from '../core/services/httpService'

@Component({
 
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersData:ICustomer[]=[];

  constructor(private service:HttpService) {
    
    this.getCustomerData();

   }

   getCustomerData():void{
       this.service.getAllData()
      .subscribe((res: ICustomer[]) => {
      
        this.customersData = res;
      
          
      });
   }

  ngOnInit() {
  }

}
