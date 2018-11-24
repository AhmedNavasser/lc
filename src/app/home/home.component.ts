import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import particleConfig from '../../particlesjs-config.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = particleConfig;
  }

  constructor(private route: Router) {}

  onRegister() {
    this.route.navigate(['/register']);
  }
}
