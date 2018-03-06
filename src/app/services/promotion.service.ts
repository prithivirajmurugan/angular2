import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular:Restangular) { }

  getPromotions():Observable<Promotion[]>
  {
   /* return new Observable(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS),5000)
    });*/
    return this.restangular.all('promotions').getList();
    //return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id:number):Observable<Promotion>
  {
   /* return new Observable(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]),5000);
    });*/
    return this.restangular.one('promotions'+id).get();
    //return Observable.of(PROMOTIONS.filter((promo)=>(promo.id===id))[0]).delay(2000);
  }

  getFeaturedPromotion():Observable<Promotion>
  {
    /*return new Observable(resolve=>{
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]),5000);
    });*/
    return this.restangular.all('promotions').getList({featured:true}).map(promo=>promo[0]);
    //return Observable.of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).delay(2000);
  }

}
