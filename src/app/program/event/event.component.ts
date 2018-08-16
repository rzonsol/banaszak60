import {Component, Input, OnInit} from '@angular/core';
import {ConferenceEvent} from '../../model/ConferenceEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  conferenceEvent: ConferenceEvent;

  constructor() { }

  ngOnInit() {
  }
  public showTime(): boolean {
    return this.conferenceEvent.time !== '';
  }
  public showAnnouncement(): boolean {
    return this.conferenceEvent.eventType !== "LECTURE";
  }

  public showSpeakerAndTitleShw(): boolean{
    return this.conferenceEvent.eventType === "LECTURE";
  }


}
