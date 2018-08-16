
export class ConferenceEvent {
  day: string;
  eventType: string;
  time: string;
  dayEventOrderNumber: string;
  speaker: string;
  lectureTitle: string;
  announcement: string;

  constructor(day: string, eventType: string, time: string, dayEventOrderNumber: string, speaker: string, lectureTitle: string, announcement: string) {
    this.day = day;
    this.eventType = eventType;
    this.time = time;
    this.dayEventOrderNumber = dayEventOrderNumber;
    this.speaker = speaker;
    this.lectureTitle = lectureTitle;
    this.announcement = announcement;
  }
}
