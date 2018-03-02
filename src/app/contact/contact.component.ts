import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ContactType,Feedback} from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  formErrors={
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':''
 };

 validateMessages=
 {
   'firstname':
   {
     'required':'First Name is required',
     'minlength':'First Name must be atleast 2 characters long',
     'maxlength':'First Name can only be atmost 25 characters'
    },
    'lastname':
    {
     'required':'Last Name is required',
      'minlength':'Last Name must be atleast 2 characters long',
      'maxlength':'Last Name can only be atmost 25 characters'
    },
   'telnum':
   {
    'required':'TelPhone Number is required',
    'pattern':'Tel. number must be only numbers.'
   },
   'email':
  {
    'required':'Email id is required',
    'email':'Email not in valid format'

  }

 };

 onValueChanged(data?:any)
 {
    if(!this.feedbackForm)
    {return;}
    const form=this.feedbackForm;
    for(const field in this.formErrors)
    {
      this.formErrors[field]='';
      const control=form.get(field);
      if(control && control.dirty && !control.valid)
      {
        const messages=this.validateMessages[field];
        for (const key in control.errors)
        {
          this.formErrors[field]+=messages[key] + ''
        }
      }
    }
 }
  constructor( private fb:FormBuilder) { 
    this.createForm();
  }
  feedbackForm:FormGroup;
  feedback:Feedback;
  contactType=ContactType;


  ngOnInit() {
  }

  createForm()
  {
    this.feedbackForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum:[0,[Validators.required,Validators.pattern]],
      email:['',[Validators.required,Validators.email]],
      agree:false,
      contacttype:'None',
      message:''
    });

    this.feedbackForm.valueChanges
    .subscribe(data=>this.onValueChanged(data));

    this.onValueChanged();//(re) set form validation messages
  }
  onSubmit():void
  {
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contacttype:'None',
      message:''
    });
  }

}
