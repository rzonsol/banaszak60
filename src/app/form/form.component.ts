///<reference path="../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;


  constructor(private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'affiliation': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null),
      'specialRequest': new FormControl(null)
    });
  }
  onGoBack() {
    this.router.navigate(['/']);
  }

  onClearForm() {
    this.signupForm.reset();
  }

  onSubmit() {
    // todo
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }else {
      (<any>Object).values(this.signupForm.controls).forEach(
        c => {
          c.markAsTouched();
        }
      );
    }
  }

}
