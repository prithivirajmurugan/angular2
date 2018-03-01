import { Injectable } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';
import { resolve } from 'dns';

@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders():Promise<CoporateLeader[]>
{
  return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS),2000)
  });
}
getLeaderbyId(id:number):Promise<CoporateLeader>
{
  return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.id===id)[0]),2000)
  });

}
getFeaturedLeader():Promise<CoporateLeader>
{
  return new Promise(resolve=>{
    //Simulate server latency with 2 second delay
    setTimeout(()=>resolve(CORPORATELEADERS.filter((lead)=>lead.featured)[0]),2000)
  });
}}