import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {AlertModule} from 'ngx-bootstrap';
import {WelcometComponent} from './main/welcomet/welcomet.component';
import {PlenarySpeakersComponent} from './main/plenary-speakers/plenary-speakers.component';
import {SpeakerComponent} from './main/plenary-speakers/speaker/speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WelcometComponent,
    PlenarySpeakersComponent,
    SpeakerComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
