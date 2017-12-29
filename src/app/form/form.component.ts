
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Constants} from '../model/Constants';
import {ParticipantSignUpRequest} from '../model/ParticipantSignUpRequest';
import {FormService} from '../service/form.service';
import {AlertService} from '../alert/alert.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;
  disableBtn= false;


  constructor(private router: Router, private formService: FormService, private alertService: AlertService) { }

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
      this.alertService.info('Your application has been sent.');
      this.formService.saveParticipant(this.createdRequestDto());
    }else {
      (<any>Object).values(this.signupForm.controls).forEach(
        c => {
          c.markAsTouched();
        }
      );
    }
  }
  private createdRequestDto(): ParticipantSignUpRequest {
    return new ParticipantSignUpRequest(
      this.signupForm.get('firstName').value,
      this.signupForm.get('lastName').value,
      this.signupForm.get('email').value,
      this.signupForm.get('phoneNumber').value,
      this.signupForm.get('specialRequest').value,
      Constants.CONFERENCE_ID,
      this.signupForm.get('affiliation').value,
    );
  }

}
