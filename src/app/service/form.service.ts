import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AlertService} from '../alert/alert.service';
import {Constants} from '../model/Constants';
import {ParticipantSignUpRequest} from '../model/ParticipantSignUpRequest';

@Injectable()
export class FormService {

  constructor(private http: Http, private alertService: AlertService) { }

  saveParticipant(participantSignUpRequest: ParticipantSignUpRequest){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions(headers);
     this.http.post(Constants.SIGN_UP_PARTICIPANT_URL, participantSignUpRequest, options).subscribe(
      data => {
        console.log(data);
        this.alertService.success('Thank you for registration, within 48 hours you will receive an e-mail with confirmation of registration');
      },
      err => {
        console.log(err);
        this.alertService.error(err.text());
      }
    );
  }

}
