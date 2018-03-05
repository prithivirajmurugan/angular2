import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { visibility  } from '../animations/app.animations';
import { Comment } from '../shared/comment';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
  animations:[visibility()   ]
          })
export class DishDetailComponent implements OnInit 
{
dish:Dish;
dishcopy=null;
dishIds:number[];
prev:number;
next:number;
errMsg:string;
visibility='shown';

commentsForm:FormGroup;
commentiter:Comment={
author:'',
date:'',
rating:0,
comment:''};
formErrors=
{
  'name':'',
  'comments':'',
  'rating':'',

}
validationMessages=
{
  'name':
  {
    'required':'Name is required',
    'minlength':'Name should be more than 2 letters',
    'maxlength':'Name should be less than 25 letters',
  },
  'comments':
  {
    'required':'Comments are required'
  },
  'ratings':
  {
    'required':'Please enter your rating'
  }
}

onValueChanged(data?:any)
{
  if(!this.commentsForm)
  {
    return;
  }
  const form=this.commentsForm;
  for(const field in this.formErrors)
  {
    this.formErrors[field]='';
    const control = form.get(field);
    if(control && control.dirty && !control.valid)
    {
      const messages=this.validationMessages[field];
      for(const key in control.errors)
      {
        this.formErrors[field]+=messages[key] + ' ';
      }
    }
  }
}
  constructor(private dishservice:DishService,
              private activatedroute:ActivatedRoute,
              private location:Location,
              private fb:FormBuilder,
              @Inject('BaseURL') private BaseURL )
   {this.createForm();}   

  
   createForm():void
   {
     this.commentsForm=this.fb.group
     ({
       name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
       comments:['',[Validators.required]],
       rating:['',Validators.required]

     });
     this.commentsForm.valueChanges.subscribe(data=>this.onValueChanged(data));
     this.onValueChanged();

   }
   onSubmit():void
   {
    this.commentiter.author=this.commentsForm.get('name').value;
    this.commentiter.date=new Date().toISOString();
    this.commentiter.comment=this.commentsForm.get('comments').value;
    this.commentiter.rating=+this.commentsForm.get('rating').value;
    this.dishcopy.comments.push(this.commentiter);
    this.dishcopy.save().subscribe(dish=>{this.dish = dish;
                                    console.log(this.dish);});
    this.commentsForm.reset({
      name:'',
      comments:'',
      rating:''
    });
     /*this.comment.author=this.commentsForm.get('name').value;

    this.comment.comment=this.commentsForm.get('comments').value;
    this.comment.date=new Date().toISOString();
    this.comment.rating=this.commentsForm.get('rating').value;*/

   }
  ngOnInit() {

    //let id=+this.activatedroute.snapshot.params['id'];
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activatedroute.params
      .switchMap((params: Params) => {this.visibility='hidden';return this.dishservice.getDish(+params['id']);})
      .subscribe(dish => { this.dish = dish;this.dishcopy=dish; this.setPrevNext(dish.id);this.visibility='shown'; },
                 errMsg=>{this.dish=null;this.errMsg=<any>errMsg} );
  }
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack():void{
    this.location.back();
  }
}
