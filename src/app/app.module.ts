import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {WelcometComponent} from './main/welcomet/welcomet.component';
import {PlenarySpeakersComponent} from './main/plenary-speakers/plenary-speakers.component';
import {SpeakerComponent} from './main/plenary-speakers/speaker/speaker.component';
import {ScientificComitteeComponent} from './main/scientific-comittee/scientific-comittee.component';
import {OrganizersComponent} from './main/organizers/organizers.component';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import {SpeakersService} from './service/speakers.service';
import {DropdownModule} from 'angular-custom-dropdown';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from './service/form.service';
import {ConferenceFeeComponent} from './conference-fee/conference-fee.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { NavComponent } from './nav/nav.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantComponent } from './Participants/participant/participant.component';
import {ParticipantsService} from './service/participants.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ConferenceSiteComponent } from './conference-site/conference-site.component';
import { ProgramComponent } from './program/program.component';
import { EventComponent } from './program/event/event.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form', component: FormComponent},
  {path: 'fee', component: ConferenceFeeComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'conferenceSite', component: ConferenceSiteComponent},
  {path: 'plan', component: ProgramComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WelcometComponent,
    PlenarySpeakersComponent,
    SpeakerComponent,
    ScientificComitteeComponent,
    OrganizersComponent,
    AlertComponent,
    FormComponent,
    ConferenceFeeComponent,
    SponsorsComponent,
    NavComponent,
    ParticipantsComponent,
    ParticipantComponent,
    ConferenceSiteComponent,
    ProgramComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    NgbModule.forRoot()
  ],
  providers: [AlertService, SpeakersService, FormService, ParticipantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
