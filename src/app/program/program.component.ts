import { Component, OnInit } from '@angular/core';
import {ConferenceEvent} from '../model/ConferenceEvent';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  plan: ConferenceEvent [] ;

  constructor() { }

  ngOnInit() {
    this.loadPlan();
  }

  public getEventByDay(day: string): ConferenceEvent [] {
    return this.plan.filter( e => e.day === day);
  }

  loadPlan() {
    this.plan = [
      {
        "day": "Monday",
        "eventType": "ANNOUNCEMENT",
        "time": "",
        "dayEventOrderNumber": "0",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "9:00 - 9:45 Conference registration"
      },
      {
        "day": "Monday",
        "eventType": "ANNOUNCEMENT",
        "time": "",
        "dayEventOrderNumber": "1",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "9:45 - 10:00 Opening of the conference"
      },
      {
        "day": "Monday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "2",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE MORNING SESSION"
      },
      {
        "day": "Monday",
        "eventType": "LECTURE",
        "time": "10:00 - 10:50",
        "dayEventOrderNumber": "3",
        "speaker": "Dominique Arlettaz",
        "lectureTitle": "Algebraic K-theory with a flavor of homotopy theory : old mathematical stories with Grzegorz Banaszak",
        "announcement": ""
      },
      {
        "day": "Monday",
        "eventType": "ANNOUNCEMENT",
        "time": "10:50 - 11:10",
        "dayEventOrderNumber": "4",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Monday",
        "eventType": "LECTURE",
        "time": "11:10 - 12:00",
        "dayEventOrderNumber": "5",
        "speaker": "Pierre Colmez",
        "lectureTitle": "On the p-adic cohomology of p-adic symmetric domains",
        "announcement": ""
      },
      {
        "day": "Monday",
        "eventType": "LECTURE",
        "time": "12:10 - 13:00",
        "dayEventOrderNumber": "6",
        "speaker": "Piotr Krasoń",
        "lectureTitle": "Linear relations in algebraic groups and Drinfeld modules",
        "announcement": ""
      },
      {
        "day": "Monday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:10 - 14:40",
        "dayEventOrderNumber": "7",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Lunch"
      },
      {
        "day": "Monday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "8",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE AFTERNOON SESSION"
      },
      {
        "day": "Monday",
        "eventType": "LECTURE",
        "time": "14:40 - 15:30",
        "dayEventOrderNumber": "9",
        "speaker": "Mahesh Kakde",
        "lectureTitle": "On Gross’s conjecture and Hilbert’s 12th problem",
        "announcement": ""
      },
      {
        "day": "Monday",
        "eventType": "ANNOUNCEMENT",
        "time": "15:30 - 15:45",
        "dayEventOrderNumber": "10",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Monday",
        "eventType": "LECTURE",
        "time": "15:45 - 16:35",
        "dayEventOrderNumber": "11",
        "speaker": "Javier Fresán",
        "lectureTitle": "Kloosterman sums and irregular Hodge filtration",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "0",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE MORNING SESSION"
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "10:00 - 10:50",
        "dayEventOrderNumber": "1",
        "speaker": "John Coates",
        "lectureTitle": "Stronger forms of some results of Gross and Rohrlich",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "ANNOUNCEMENT",
        "time": "10:50 - 11:10",
        "dayEventOrderNumber": "2",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "11:10 - 12:00",
        "dayEventOrderNumber": "3",
        "speaker": "Krzysztof Kłosin",
        "lectureTitle": "The Paramodular Conjecture for abelian surfaces with rational torsion I",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "12:10 - 13:00",
        "dayEventOrderNumber": "4",
        "speaker": "Tobias Berger",
        "lectureTitle": "The Paramodular Conjecture for abelian surfaces with rational torsion II",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:10 - 14:40",
        "dayEventOrderNumber": "5",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Lunch"
      },
      {
        "day": "Tuesday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "6",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE AFTERNOON SESSION"
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "14:40 - 15:30",
        "dayEventOrderNumber": "7",
        "speaker": "Mladen Dimitrov",
        "lectureTitle": "Uniform boundedness for the rational torsion of abelian 3-folds of Picard type",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "15:40 - 16:30",
        "dayEventOrderNumber": "8",
        "speaker": "Jan Nekovár",
        "lectureTitle": "Some remarks on the Euler system of CM points",
        "announcement": ""
      },
      {
        "day": "Tuesday",
        "eventType": "ANNOUNCEMENT",
        "time": "16:30 - 16:50",
        "dayEventOrderNumber": "9",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Tuesday",
        "eventType": "LECTURE",
        "time": "16:50 - 17:40",
        "dayEventOrderNumber": "10",
        "speaker": "Andrzej Dąbrowski",
        "lectureTitle": "On a Linnik problem for elliptic curves",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "0",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE MORNING SESSION"
      },
      {
        "day": "Wednesday",
        "eventType": "LECTURE",
        "time": "10:00 - 10:50",
        "dayEventOrderNumber": "1",
        "speaker": "Peter Schneider",
        "lectureTitle": "Pro-p Iwahori-Hecke Ext-algebras",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "ANNOUNCEMENT",
        "time": "10:50 - 11:10",
        "dayEventOrderNumber": "2",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Wednesday",
        "eventType": "LECTURE",
        "time": "11:10 - 12:00",
        "dayEventOrderNumber": "3",
        "speaker": "Andrzej Schinzel",
        "lectureTitle": "On the smallest number of terms in vanishing sums of units in number fields",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "LECTURE",
        "time": "12:10 - 13:00",
        "dayEventOrderNumber": "4",
        "speaker": "Preda Mihailescu",
        "lectureTitle": "On the simplest non rational number fields, and their class groups",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:10 - 14:40",
        "dayEventOrderNumber": "5",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Lunch"
      },
      {
        "day": "Wednesday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "6",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE AFTERNOON SESSION"
      },
      {
        "day": "Wednesday",
        "eventType": "LECTURE",
        "time": "14:40 - 15:30",
        "dayEventOrderNumber": "7",
        "speaker": "Yoichi Uetake",
        "lectureTitle": "Grzegorz Banaszak’s abstract intersection theory",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "ANNOUNCEMENT",
        "time": "15:30 - 15:45",
        "dayEventOrderNumber": "8",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Wednesday",
        "eventType": "LECTURE",
        "time": "15:45 - 16:35",
        "dayEventOrderNumber": "9",
        "speaker": "Christopher Deninger",
        "lectureTitle": "Dynamical systems for arithmetic schemes",
        "announcement": ""
      },
      {
        "day": "Wednesday",
        "eventType": "ANNOUNCEMENT",
        "time": "19:00-23:00",
        "dayEventOrderNumber": "10",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "the Banquet and Piano Recital (Dorota Blinkiewicz) in \"Bazar Poznański\""
      },
      {
        "day": "Thursday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "0",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE MORNING SESSION"
      },
      {
        "day": "Thursday",
        "eventType": "LECTURE",
        "time": "10:00 - 10:50",
        "dayEventOrderNumber": "1",
        "speaker": "Cristian Popescu",
        "lectureTitle": "The Coates-Sinnott conjecture and beyond",
        "announcement": ""
      },
      {
        "day": "Thursday",
        "eventType": "ANNOUNCEMENT",
        "time": "10:50 - 11:10",
        "dayEventOrderNumber": "2",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Thursday",
        "eventType": "LECTURE",
        "time": "11:10 - 12:00",
        "dayEventOrderNumber": "3",
        "speaker": "Stephen Lichtenbaum",
        "lectureTitle": "Euler systems for Siegel modular forms",
        "announcement": ""
      },
      {
        "day": "Thursday",
        "eventType": "LECTURE",
        "time": "12:10 - 13:00",
        "dayEventOrderNumber": "4",
        "speaker": "Sarah Zerbes",
        "lectureTitle": "On the simplest non rational number fields, and their class groups",
        "announcement": ""
      },
      {
        "day": "Thursday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:10 - 14:40",
        "dayEventOrderNumber": "5",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Lunch"
      },
      {
        "day": "Thursday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "6",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE AFTERNOON SESSION"
      },
      {
        "day": "Thursday",
        "eventType": "LECTURE",
        "time": "14:40 - 15:30",
        "dayEventOrderNumber": "7",
        "speaker": "Ivan Fesenko",
        "lectureTitle": "Two adelic structures on elliptic surfaces and their zeta functions",
        "announcement": ""
      },
      {
        "day": "Thursday",
        "eventType": "ANNOUNCEMENT",
        "time": "15:30 - 15:45",
        "dayEventOrderNumber": "8",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Thursday",
        "eventType": "LECTURE",
        "time": "15:45 - 16:35",
        "dayEventOrderNumber": "9",
        "speaker": "Jean-Pierre Wintenberger",
        "lectureTitle": "TBA",
        "announcement": ""
      },
      {
        "day": "Friday",
        "eventType": "SESSION",
        "time": "",
        "dayEventOrderNumber": "0",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "THE MORNING SESSION"
      },
      {
        "day": "Friday",
        "eventType": "LECTURE",
        "time": "10:00 - 10:50",
        "dayEventOrderNumber": "1",
        "speaker": "Jacques Tilouine",
        "lectureTitle": "Integral period relations for base change and congruences",
        "announcement": ""
      },
      {
        "day": "Friday",
        "eventType": "ANNOUNCEMENT",
        "time": "10:50 - 11:10",
        "dayEventOrderNumber": "2",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Coffee break"
      },
      {
        "day": "Friday",
        "eventType": "LECTURE",
        "time": "11:10 - 12:00",
        "dayEventOrderNumber": "3",
        "speaker": "Romyar Sharifi",
        "lectureTitle": "Modular symbols and products in K-theory",
        "announcement": ""
      },
      {
        "day": "Friday",
        "eventType": "LECTURE",
        "time": "12:10 - 13:00",
        "dayEventOrderNumber": "4",
        "speaker": "Wiesława Nizioł",
        "lectureTitle": "Comparison theorems for rigid analytic varieties",
        "announcement": ""
      },
      {
        "day": "Friday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:00-13:10",
        "dayEventOrderNumber": "5",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Closing ceremony"
      },
      {
        "day": "Friday",
        "eventType": "ANNOUNCEMENT",
        "time": "13:10 - 14:40",
        "dayEventOrderNumber": "6",
        "speaker": "",
        "lectureTitle": "",
        "announcement": "Lunch"
      }
    ]
    ;
  }
}
