import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import{ Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { CoporateLeader } from '../shared/corporateLeader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
  leader:CoporateLeader;
  constructor(private dishService:DishService,
              private promotionService:PromotionService,
              private leaderservice:LeaderService) { }

  ngOnInit() 
  {
    this.dishService.getFeaturedDish().then(dish=>this.dish=dish);
    this.promotionService.getFeaturedPromotion().then(promo=>this.promotion=promo);
    this.leaderservice.getFeaturedLeader().then(lead=>this.leader=lead);
  }

}
