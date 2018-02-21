import { Component, OnInit } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  CorporateLeaders:CoporateLeader[];
  CorporateLeader:CoporateLeader;
  constructor(private leaderservice:LeaderService) { }

  ngOnInit() 
  {
    this.CorporateLeaders=this.leaderservice.getLeaders();
  }

}
