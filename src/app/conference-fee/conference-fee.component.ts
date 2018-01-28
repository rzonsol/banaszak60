import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conference-fee',
  templateUrl: './conference-fee.component.html',
  styleUrls: ['./conference-fee.component.css']
})
export class ConferenceFeeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  onGoBack() {
    this.router.navigate(['/']);
  }

  onGoToForm() {
    this.router.navigate(['/form']);
  }

}
