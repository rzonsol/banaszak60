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
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from './service/form.service';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form', component: FormComponent}
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
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertService, SpeakersService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
