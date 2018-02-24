import { Injectable } from '@angular/core';
import {AlertService} from '../alert/alert.service';
import {Http} from '@angular/http';
import {Constants} from '../model/Constants';
import {Participant} from '../model/Participant';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ParticipantsService {

  constructor(private http: HttpClient,
              private alertServiceService: AlertService) { }

  getParticipants(): Observable<Participant[]> {
    return this.http
      .get(Constants.PARTICIPANTS_URL)
      .map(response => response as Participant[]);
  }

  private handleError(error: any) {
    this.alertServiceService.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }

}
