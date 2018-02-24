import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Participant} from '../model/Participant';
import {AlertService} from '../alert/alert.service';
import 'rxjs/add/operator/map';
import {Constants} from '../model/Constants';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpeakersService {

  constructor(private http: HttpClient,
              private alertServiceService: AlertService) { }

  getSpeakers(): Observable<Participant[]> {
    return this.http
      .get(Constants.SPEAKERS_URL)
      .map(response => response as Participant[]);
  }

  private handleError(error: any) {
    this.alertServiceService.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }
}
