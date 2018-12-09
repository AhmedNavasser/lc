import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lale-card',
  templateUrl: './lale-card.component.html',
  styleUrls: ['./lale-card.component.css']
})
export class LaleCardComponent implements OnInit {
  matCardImageSource = '../../assets/images/logo.png';
  constructor() { }

  ngOnInit() {
  }

}
