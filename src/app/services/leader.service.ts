import { Injectable } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';
import { resolve } from 'dns';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders():Promise<CoporateLeader[]>
{

  return Observable.of(CORPORATELEADERS).delay(2000).toPromise();
 /* return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS),2000)
  });*/
}
getLeaderbyId(id:number):Promise<CoporateLeader>
{
 /* return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.id===id)[0]),2000)
  });*/

  return Observable.of(CORPORATELEADERS.filter((lead)=>lead.id===id)[0]).delay(2000).toPromise();

}
getFeaturedLeader():Promise<CoporateLeader>
{
  /*return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.featured)[0]),2000)
  });*/
  return Observable.of(CORPORATELEADERS.filter((lead)=>lead.featured)[0]).delay(2000).toPromise();
}}