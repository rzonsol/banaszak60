

  export class ParticipantSignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    specialRequest: string;
    conferenceId: number;
    affiliation: string;
    citizenship: string;
    arrivalDate: number;
    departureDate: number;
    constructor(firstName: string,
                lastName: string,
                email: string,
                phoneNumber: string,
                specialRequest: string,
                conferenceId: number,
                affiliation: string,
                citizenship: string,
                arrivalDate: number,
                departureDate: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.specialRequest = specialRequest;
      this.conferenceId = conferenceId;
      this.affiliation = affiliation;
      this.citizenship = citizenship;
      this.arrivalDate = arrivalDate;
      this.departureDate = departureDate;
    }
  }
