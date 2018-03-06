import { Injectable } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular:Restangular) { }
  getLeaders():Observable<CoporateLeader[]>
{

  return this.restangular.all('leaders').getList();
  //return Observable.of(CORPORATELEADERS).delay(2000);
 /* return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS),2000)
  });*/
}
getLeaderbyId(id:number):Observable<CoporateLeader>
{
 /* return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.id===id)[0]),2000)
  });*/
  return this.restangular.one('leaders',id).get();
  //return Observable.of(CORPORATELEADERS.filter((lead)=>lead.id===id)[0]).delay(2000);

}
getFeaturedLeader():Observable<CoporateLeader>
{
  /*return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.featured)[0]),2000)
  });*/
  //return Observable.of(CORPORATELEADERS.filter((lead)=>lead.featured)[0]).delay(2000);
    return this.restangular.all('leaders').getList({featured:true}).map(leaders=>leaders[0]);
}}