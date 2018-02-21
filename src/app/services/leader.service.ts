import { Injectable } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';

@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders():CoporateLeader[]
{
  return CORPORATELEADERS;
}
getLeaderbyId(id:number):CoporateLeader
{
  return CORPORATELEADERS.filter((lead)=>lead.id===id)[0];
}
getFeaturedLeader():CoporateLeader
{
  return CORPORATELEADERS.filter(lead=>lead.featured)[0];
}
}
