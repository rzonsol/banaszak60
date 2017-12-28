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

  singupForm: FormGroup;


  constructor(private router: Router) { }

  ngOnInit() {
    this.singupForm = new FormGroup({
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
    this.singupForm.reset();
  }

  onSubmit() {
    // todo
    if (this.singupForm.valid) {
      console.log(this.singupForm.value);
    }else {
      (<any>Object).values(this.singupForm.controls).forEach(
        c => {
          c.markAsTouched();
        }
      );
    }
  }

}
