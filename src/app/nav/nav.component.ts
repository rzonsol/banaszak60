import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onHomeBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/']);
  }
  onParticipantsBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/participants']);
  }
  onConferenceSiteBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/conferenceSite']);
  }

  onFormBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/form']);
  }
  onFeeBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/fee']);
  }
  onConferencePlanBtn() {
    this.isNavbarCollapsed = true;
    this.router.navigate(['/plan']);
  }
  setActiveClass(btn: string): boolean {
    return this.router.url === btn;
  }
  closeSubMenu() {
    // this.isFormCollapsed = true;
    // this.isAccommodationCollapsed = true;
    // this.isTravelCollapsed = true;
  }
  showSubMenu(b: boolean): boolean{
    this.closeSubMenu();
    return !b;
  }
}
