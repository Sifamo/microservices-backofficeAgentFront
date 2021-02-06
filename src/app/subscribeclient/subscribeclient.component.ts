import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Subclient } from '../subclient';

@Component({
  selector: 'app-subscribeclient',
  templateUrl: './subscribeclient.component.html',
  styleUrls: ['./subscribeclient.component.css']
})
export class SubscribeclientComponent implements OnInit {

  subclient = new Subclient();

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.subscribeclient(this.subclient).subscribe(
      data => {
        if(data.response == 'success'){
          this._router.navigate(['/subclientsuccess'])
        }
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
