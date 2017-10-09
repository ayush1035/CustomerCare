import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import  {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(), RouterModule.forRoot([{ path:'',redirectTo:'about-page',pathMatch:'full'}]),AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
