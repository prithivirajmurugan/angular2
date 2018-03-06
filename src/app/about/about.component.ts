import { Component, OnInit } from '@angular/core';
import { CoporateLeader } from '../shared/corporateLeader';
import { CORPORATELEADERS } from '../shared/corporateLeaders';
import { flyInOut,expand } from '../animations/app.animations';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[flyInOut(),expand()]
})
export class AboutComponent implements OnInit {
  CorporateLeaders:CoporateLeader[];
  CorporateLeader:CoporateLeader;
  constructor(private leaderservice:LeaderService) { }

  ngOnInit() 
  {
    this.leaderservice.getLeaders().subscribe(cor=>this.CorporateLeaders=cor);
  }

}
