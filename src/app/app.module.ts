import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import {AccountServices} from './services/account.services';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import { TopoComponent } from './topo/topo.component';
import { AddNewTopoComponent } from './add-new-topo/add-new-topo.component';
import {UploadTopoService} from './services/uploadTopo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    TopoComponent,
    AddNewTopoComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login' ,
        component: LoginComponent
      },
      {
        path : 'compte',
        component : AccountComponent
      },
      {
        path : 'topo',
        component : TopoComponent
      },
      {
        path : 'addTopo',
        component : AddNewTopoComponent
      }
    ])
  ],
  providers: [AccountServices, UploadTopoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
