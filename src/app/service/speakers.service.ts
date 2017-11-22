import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Participant} from '../model/Participant';
import {AlertService} from '../alert/alert.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SpeakersService {

  private heroesUrl = 'http://localhost:8080/public/speakers?id=1';

  constructor(private http: Http,
              private alertServiceService: AlertService) { }

  getSpeakers(): Observable<Participant[]> {
    return this.http
      .get(this.heroesUrl)
      .map(response => response.json() as Participant[]);
  }

  private handleError(error: any) {
    this.alertServiceService.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }
}
