import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit 
{
dish:Dish;
  constructor(private dishservice:DishService,
              private activatedroute:ActivatedRoute,
              private location:Location )
   {}   


  ngOnInit() {

    let id=+this.activatedroute.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish=>this.dish=dish);
  }

  goBack():void{
    this.location.back();
  }
}
