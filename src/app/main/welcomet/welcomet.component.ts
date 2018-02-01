import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcomet',
  templateUrl: './welcomet.component.html',
  styleUrls: ['./welcomet.component.css']
})
export class WelcometComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFormLink() {
    this.router.navigate(['/form']);
  }
  onFeeLink() {
    this.router.navigate(['/fee']);
  }
}
