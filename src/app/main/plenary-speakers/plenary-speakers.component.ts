import {Component, OnInit} from '@angular/core';
import {Participant} from '../../model/Participant';

@Component({
  selector: 'app-plenary-speakers',
  templateUrl: './plenary-speakers.component.html',
  styleUrls: ['./plenary-speakers.component.css']
})
export class PlenarySpeakersComponent implements OnInit {

  participants: Participant[] = [new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak'),
    new Participant(1, 'Piotr', 'Rzonsowski', 'brak')];
  constructor() { }

  ngOnInit() {
  }

}

// todo add service witch get data from server
