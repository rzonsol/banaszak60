import {Component, OnInit} from '@angular/core';
import {Alert} from './alert';
import {AlertService} from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
  }

}
