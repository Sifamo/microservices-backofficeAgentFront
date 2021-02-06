import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginbackoffComponent } from './loginbackoff/loginbackoff.component';
import { LoginagentComponent } from './loginagent/loginagent.component';
import { SubscribeagentComponent } from './subscribeagent/subscribeagent.component';
import { SubscribeclientComponent } from './subscribeclient/subscribeclient.component';
import { SubagentsuccessComponent } from './subagentsuccess/subagentsuccess.component';
import { SubclientsuccessComponent } from './subclientsuccess/subclientsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    LoginbackoffComponent,
    LoginagentComponent,
    SubscribeagentComponent,
    SubscribeclientComponent,
    SubagentsuccessComponent,
    SubclientsuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
