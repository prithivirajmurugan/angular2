import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit 
{
dish:Dish;
dishIds:number[];
prev:number;
next:number;
  constructor(private dishservice:DishService,
              private activatedroute:ActivatedRoute,
              private location:Location )
   {}   


  ngOnInit() {

    //let id=+this.activatedroute.snapshot.params['id'];
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activatedroute.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }
  goBack():void{
    this.location.back();
  }
}
