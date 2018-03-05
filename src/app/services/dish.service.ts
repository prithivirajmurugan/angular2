import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';
import {ProcessHttpmsgService} from './process-httpmsg.service';

import 'rxjs/add/operator/catch';
import { error } from 'util';

@Injectable()
export class DishService {

  constructor(private http:Http,
              private processHTTPMsg:ProcessHttpmsgService) { }

  getDishes():Observable<Dish[]>
  {

    return this.http.get(baseURL+'dishes')
            .map(res=> {return this.processHTTPMsg.extractData(res)})
            .catch(error=>{ return this.processHTTPMsg.handleError(error) });;
    //return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      //setTimeout(()=>resolve(DISHES),5000)
    //});
  }


  getDish(id:number):Observable<Dish>
  {
    /*return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.id===id))[0]),2000)
    });*/
    return this.http.get(baseURL+'dishes/' + id)
    .map(res=> {return this.processHTTPMsg.extractData(res)})
    .catch(error=>{ return this.processHTTPMsg.handleError(error) });
  }

  getFeaturedDish():Observable<Dish>
  {
    /*return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=> dish.featured)[0]),2000)
    });*/

    return this.http.get(baseURL+'dishes?featured=true')
          .map(res=>this.processHTTPMsg.extractData(res)[0])
          .catch(error=>{ return this.processHTTPMsg.handleError(error) });
  }

  getDishIds():Observable<number[]>
  {
    return this.getDishes()
            .map(dishes=>{return dishes.map(dish=>dish.id)});
  }
}
