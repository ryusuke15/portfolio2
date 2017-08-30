import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MdDialog} from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';

import { ContactService } from './contact.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass'],
  providers: [ContactService]
})
export class ContactPageComponent implements OnInit, OnDestroy{
  contactForm: FormGroup;
  subscription: Subscription;

  constructor(private contactService: ContactService,
              private router: Router,
              private dialog: MdDialog,
              title: Title,
              meta: Meta) {
    title.setTitle('Contact | Ryusuke Lavalla - fullstack freelance web developer');
    meta.addTags([
      {name: 'description', content:'My contact details. Currently, I am available for hire.'}
    ]);

  }

  ngOnInit(){
    let top = document.querySelector('.page-format')
    top.scrollIntoView()
    this.contactForm = new FormGroup({
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      'message': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(2000)]))
    });
  }

  onSubmit(){
    this.subscription = this.contactService.addContact(this.contactForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
    if (this.contactForm.valid){
      this.contactForm.reset();
      this.router.navigate(['/']);
      this.dialog.open(ContactDialog);
    }
  }

  ngOnDestroy(){}
}
@Component({
  selector: 'contact-dialog',
    templateUrl: 'contact-dialog.html',
})
export class ContactDialog{}
