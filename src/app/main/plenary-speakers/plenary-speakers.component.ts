import {Component, OnInit} from '@angular/core';
import {Participant} from '../../model/Participant';
import {SpeakersService} from '../../service/speakers.service';
import {AlertService} from '../../alert/alert.service';

@Component({
  selector: 'app-plenary-speakers',
  templateUrl: './plenary-speakers.component.html',
  styleUrls: ['./plenary-speakers.component.css']
})
export class PlenarySpeakersComponent implements OnInit {

  errorService = false;

  constructor(private speakersService: SpeakersService,
              private alertService: AlertService) {
  }

  participants: Participant[];


  ngOnInit() {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.speakersService.getSpeakers()
      .subscribe(
        p => {
          this.participants = p;
          if (p.length === 0) {
            this.alertService.error('There no speakers on server or the conection faild');
          }else {
            this.participants.sort(function (a, b) {
              return a.lastName.localeCompare(b.lastName);
            });
          }
        },
        err => {
          this.errorService = true;
          this.alertService.error(err.json().error_description);
        }
      );
    }
}

// todo add service witch get data from server
