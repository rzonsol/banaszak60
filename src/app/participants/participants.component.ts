import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../model/Participant';
import {AlertService} from '../alert/alert.service';
import {ParticipantsService} from '../service/participants.service';
import {Constants} from '../model/Constants';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  errorService = false;

  constructor(private participantsService: ParticipantsService,
              private alertService: AlertService) {
  }

  participants: Participant[];


  ngOnInit() {
    this.loadParticipants();
  }

  loadParticipants() {
    this.participantsService.getParticipants()
      .subscribe(
        p => {
          this.participants = p;
          if (p.length === 0) {
            this.alertService.error('There no participants on server or the connection failed');
          }else {
            this.participants.sort(function (a, b) {
              return a.lastName.localeCompare(b.lastName);
            });
          }
        },
        err => {
          this.errorRegistration(Constants.SERVER_ERROR);
        }
      );
  }
  private errorRegistration(err) {
    console.log(err);
    this.alertService.error(err);
  }
}
