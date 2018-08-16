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
            },
            {
              "id": 63,
              "firstName": "Dorota",
              "lastName": "Blinkiewicz",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 64,
              "firstName": "Grzegorz",
              "lastName": "Banaszak",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 65,
              "firstName": "Stefan",
              "lastName": "Barańczuk",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 66,
              "firstName": "Jan",
              "lastName": "Milewski",
              "affiliation": "Poznań University of Technology"
            },
            {
              "id": 71,
              "firstName": "Wojciech",
              "lastName": "Porowski",
              "affiliation": "University of Nottingham"
            },
            {
              "id": 72,
              "firstName": "Chan-Ho",
              "lastName": "Kim",
              "affiliation": "KIAS"
            },
            {
              "id": 73,
              "firstName": "Tomasz",
              "lastName": "Jędrzejak",
              "affiliation": "University of Szczecin"
            },
            {
              "id": 74,
              "firstName": "Jędrzej",
              "lastName": "Garnek",
              "affiliation": "Adam Mickiewicz University"
            },
            {
              "id": 75,
              "firstName": "Aleksandra",
              "lastName": "Kaim",
              "affiliation": "Adam Mickiewicz University in Poznań "
            },
            {
              "id": 76,
              "firstName": "Łukasz",
              "lastName": "Pańkowski",
              "affiliation": "Adam Mickiewicz University of Poznań"
            },
            {
              "id": 77,
              "firstName": "Jerzy",
              "lastName": "Kaczorowski",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 78,
              "firstName": "Maciej",
              "lastName": "Radziejewski",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 79,
              "firstName": "Bogdan",
              "lastName": "Szydło",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 80,
              "firstName": "Ziemowit",
              "lastName": "Domański",
              "affiliation": "Poznań University of Technology"
            },
            {
              "id": 82,
              "firstName": "Michael ",
              "lastName": "Seaman",
              "affiliation": "California Institute of Technology"
            },
            {
              "id": 83,
              "firstName": "Weronika",
              "lastName": "Czerniawska",
              "affiliation": "University of Nottingham"
            },
            {
              "id": 86,
              "firstName": "Marcin",
              "lastName": "Lara",
              "affiliation": "FU Berlin"
            },
            {
              "id": 90,
              "firstName": "Łukasz",
              "lastName": "Nizio",
              "affiliation": "Adam Mickiewicz University in Poznań"
            },
            {
              "id": 93,
              "firstName": "Krzysztof",
              "lastName": "Górnisiewicz",
              "affiliation": "AMU Poznań, Poland"
            },
            {
              "id": 94,
              "firstName": "Martin",
              "lastName": "Hofer",
              "affiliation": "LMU München"
            },
            {
              "id": 95,
              "firstName": "David",
              "lastName": "Loeffler",
              "affiliation": "University of Warwick"
            },
            {
              "id": 96,
              "firstName": "Przemysław",
              "lastName": "Koprowski",
              "affiliation": "Univeristy of Silesia"
            },
            {
              "id": 97,
              "firstName": "Zbigniew",
              "lastName": "Hajto",
              "affiliation": "Faculty of Mathematics and Computer Science UJ"
            },
            {
              "id": 98,
              "firstName": "Teresa",
              "lastName": "Crespo",
              "affiliation": "Universitat de Barcelona"
            },
            {
              "id": 99,
              "firstName": "Wojciech",
              "lastName": "Bondarewicz",
              "affiliation": "Uniwersytet Szczeciński"
            },
            {
              "id": 103,
              "firstName": "Shin",
              "lastName": "Hattori",
              "affiliation": "Tokyo City University"
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
