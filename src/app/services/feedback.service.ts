import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { Feedback }  from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular:Restangular) { }
  postfeedBack(feedback:Feedback)
  {
    return this.restangular.all('feedback').post(feedback);
  }

}
