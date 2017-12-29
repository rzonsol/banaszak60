

  export class ParticipantSignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    specialRequest: string;
    conferenceId: number;
    affiliation: string;
    constructor(firstName: string,
                lastName: string,
                email: string,
                phoneNumber: string,
                specialRequest: string,
                conferenceId: number,
                affiliation: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.specialRequest = specialRequest;
      this.conferenceId = conferenceId;
      this.affiliation = affiliation;
    }
  }
