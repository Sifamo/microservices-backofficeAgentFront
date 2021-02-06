import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Subagent } from './subagent';
import { Subclient } from './subclient';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginbackoffice(user :User):Observable<any>{
    return this._http.post<any>("https://backoffagentservice.herokuapp.com/backoffauth",user)
  }

  public loginagent(user :User):Observable<any>{
    return this._http.post<any>("https://backoffagentservice.herokuapp.com/agentAuth",user)
  }

  public subscribeagent(subagent :Subagent):Observable<any>{
    return this._http.post<any>("https://backoffagentservice.herokuapp.com/subAgent",subagent)
  }

  public subscribeclient(subclient :Subclient):Observable<any>{
    return this._http.post<any>("https://backoffagentservice.herokuapp.com/subClient",subclient)
  }
}
