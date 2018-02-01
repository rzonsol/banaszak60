import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onHomeBtn() {
    this.router.navigate(['/']);
  }
  onParticipantsBtn() {
    this.router.navigate(['/participants']);
  }

  onFormBtn() {
    this.router.navigate(['/form']);
  }
  onFeeBtn() {
    this.router.navigate(['/fee']);
  }
  setActiveClass(btn: string): boolean {
    return this.router.url === btn;
  }
}
