import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-subclientsuccess',
  templateUrl: './subclientsuccess.component.html',
  styleUrls: ['./subclientsuccess.component.css']
})
export class SubclientsuccessComponent implements OnInit {
  user = new User();
  msg = ''; 
  
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginagent(this.user).subscribe(
      data => {
        if(data.response == 'success'){
          this._router.navigate(['/subclient'])
        }
        this.msg="Bad credentials, please enter valid emailId and password";
      },
      error => {
        console.log("exception occured");
    }
    );
  }

  retour(){
    this._router.navigate(['/subclient'])
  }

}
