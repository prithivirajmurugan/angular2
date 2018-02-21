import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ContactType,Feedback} from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contacttype:'None',
      message:''
    });
  }
  onSubmit():void
  {
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
