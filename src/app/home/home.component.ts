import { Component, OnInit,Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import{ Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { CoporateLeader } from '../shared/corporateLeader';
import { LeaderService } from '../services/leader.service';

import { flyInOut,expand } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[flyInOut(),expand()]
})
export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
  leader:CoporateLeader;
  dishError:string;
  constructor(private dishService:DishService,
              private promotionService:PromotionService,
              private leaderservice:LeaderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() 
  {
    this.dishService.getFeaturedDish().subscribe(dish=>this.dish=dish,
                                                  errMsg=>{this.dishError=errMsg});
    this.promotionService.getFeaturedPromotion().subscribe(promo=>this.promotion=promo);
    this.leaderservice.getFeaturedLeader().subscribe(lead=>this.leader=lead);
  }

}
