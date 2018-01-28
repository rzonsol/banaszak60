import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../model/Constants';
import {ParticipantSignUpRequest} from '../model/ParticipantSignUpRequest';

@Injectable()
export class FormService {

  constructor(private http: Http) { }

  saveParticipant(participantSignUpRequest: ParticipantSignUpRequest): Observable<any> {
    const headers: Headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(Constants.SIGN_UP_PARTICIPANT_URL, participantSignUpRequest);
  }

}
