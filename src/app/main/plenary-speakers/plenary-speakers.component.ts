import {Component, OnInit} from '@angular/core';
import {Participant} from '../../model/Participant';
import {SpeakersService} from '../../service/speakers.service';
import {AlertService} from '../../alert/alert.service';
import {Constants} from '../../model/Constants';

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
          this.errorRegistration(Constants.SERVER_ERROR);
          this.participants = [
            {
              "id": 2,
              "firstName": "Dominique",
              "lastName": "Arlettaz",
              "affiliation": "Université de Lausanne"
            },
            {
              "id": 3,
              "firstName": "Tobias",
              "lastName": "Berger",
              "affiliation": "University of Sheffield"
            },
            {
              "id": 4,
              "firstName": "John",
              "lastName": "Coates",
              "affiliation": "University of Cambridge"
            },
            {
              "id": 5,
              "firstName": "Pierre",
              "lastName": "Colmez",
              "affiliation": "CNRS Paris"
            },
            {
              "id": 6,
              "firstName": "Andrzej",
              "lastName": "Dąbrowski",
              "affiliation": "Uniwersytet Szczeciński"
            },
            {
              "id": 7,
              "firstName": "Christopher",
              "lastName": "Deninger",
              "affiliation": "Universität Münster"
            },
            {
              "id": 8,
              "firstName": "Mladen",
              "lastName": "Dimitrov",
              "affiliation": "Université de Lille"
            },
            {
              "id": 9,
              "firstName": "Ivan",
              "lastName": "Fesenko",
              "affiliation": "University of Nottingham"
            },
            {
              "id": 10,
              "firstName": "Mahesh",
              "lastName": "Kakde",
              "affiliation": "King's College London"
            },
            {
              "id": 12,
              "firstName": "Krzysztof",
              "lastName": "Kłosin",
              "affiliation": "City University of New York"
            },
            {
              "id": 13,
              "firstName": "Piotr",
              "lastName": "Krasoń",
              "affiliation": "Uniwersytet Szczeciński"
            },
            {
              "id": 14,
              "firstName": "Stephen",
              "lastName": "Lichtenbaum",
              "affiliation": "Brown University"
            },
            {
              "id": 15,
              "firstName": "Preda",
              "lastName": "Mihailescu",
              "affiliation": "Georg-August-Universität Göttingen"
            },
            {
              "id": 16,
              "firstName": "Jan",
              "lastName": "Nekovár",
              "affiliation": "Université Pierre et Marie Curie"
            },
            {
              "id": 17,
              "firstName": "Wiesława",
              "lastName": "Nizioł",
              "affiliation": "CNRS, ÉNS-Lyon"
            },
            {
              "id": 18,
              "firstName": "Cristian",
              "lastName": "Popescu",
              "affiliation": "University of California, San Diego"
            },
            {
              "id": 19,
              "firstName": "Peter",
              "lastName": "Schneider",
              "affiliation": "Universität Münster"
            },
            {
              "id": 20,
              "firstName": "Romyar",
              "lastName": "Sharifi",
              "affiliation": "University of California, Los Angeles"
            },
            {
              "id": 21,
              "firstName": "Jacques",
              "lastName": "Tilouine",
              "affiliation": "Université Paris 13"
            },
            {
              "id": 22,
              "firstName": "Yoichi",
              "lastName": "Uetake",
              "affiliation": "UAM Poznań"
            },
            {
              "id": 23,
              "firstName": "Jean-Pierre",
              "lastName": "Wintenberger",
              "affiliation": "Université de Strasbourg"
            },
            {
              "id": 24,
              "firstName": "Sarah",
              "lastName": "Zerbes",
              "affiliation": "University College London"
            },
            {
              "id": 25,
              "firstName": "Andrzej",
              "lastName": "Schinzel",
              "affiliation": "Polish Academy of Sciences"
            },
            {
              "id": 26,
              "firstName": "Javier",
              "lastName": "Fresán",
              "affiliation": "ETH Zürich"
            }
          ];
          this.participants.sort(function (a, b) {
            return a.lastName.localeCompare(b.lastName);
          });
        }
      );
    }

  private errorRegistration(err) {
    console.log(err);
    this.alertService.error(err);
  }
}

// todo add service witch get data from server
