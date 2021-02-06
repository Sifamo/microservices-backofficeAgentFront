import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginagentComponent } from './loginagent/loginagent.component';
import { LoginbackoffComponent } from './loginbackoff/loginbackoff.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubagentsuccessComponent } from './subagentsuccess/subagentsuccess.component';
import { SubclientsuccessComponent } from './subclientsuccess/subclientsuccess.component';
import { SubscribeagentComponent } from './subscribeagent/subscribeagent.component';
import { SubscribeclientComponent } from './subscribeclient/subscribeclient.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'loginbackoff',component:LoginbackoffComponent},
  {path:'loginagent',component:LoginagentComponent},
  {path:'subagent',component:SubscribeagentComponent},
  {path:'subclient',component:SubscribeclientComponent},
  {path:'subagentsuccess',component:SubagentsuccessComponent},
  {path:'subclientsuccess',component:SubclientsuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
