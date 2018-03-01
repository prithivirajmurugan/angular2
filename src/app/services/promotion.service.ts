import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]>
  {
   /* return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS),5000)
    });*/
    return Observable.of(PROMOTIONS).delay(2000).toPromise();
  }

  getPromotion(id:number):Promise<Promotion>
  {
   /* return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]),5000);
    });*/

    return Observable.of(PROMOTIONS.filter((promo)=>(promo.id===id))[0]).delay(2000).toPromise();
  }

  getFeaturedPromotion():Promise<Promotion>
  {
    /*return new Promise(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]),5000);
    });*/
    return Observable.of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).delay(2000).toPromise();
  }

}
