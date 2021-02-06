import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Subagent } from '../subagent';

@Component({
  selector: 'app-subscribeagent',
  templateUrl: './subscribeagent.component.html',
  styleUrls: ['./subscribeagent.component.css']
})
export class SubscribeagentComponent implements OnInit {

  subagent = new Subagent();

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.subscribeagent(this.subagent).subscribe(
      data => {
        if(data.response == 'success'){
          this._router.navigate(['/loginsuccess'])
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
