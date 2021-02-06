import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-loginbackoff',
  templateUrl: './loginbackoff.component.html',
  styleUrls: ['./loginbackoff.component.css']
})
export class LoginbackoffComponent implements OnInit {

  user = new User();
  msg = ''; 

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginbackoffice(this.user).subscribe(
      data => {
        if(data.response == 'success'){
          this._router.navigate(['/subagent'])
        }
        this.msg="Bad credentials, please enter valid emailId and password";
      },
      error => {
        console.log("exception occured");
    }
    );
  }

  accueil(){
    this._router.navigate([''])
  }

}
