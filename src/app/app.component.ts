import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeThemeService } from './services/change-theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'شرکت خدماتی لاله';
  themeClass= localStorage.getItem('theme');
  constructor(private route:Router , private themeService : ChangeThemeService){
    this.themeService.toggleThemeObservable.subscribe((e:string) =>{
      this.themeClass = e;
      });
  }
  ngOnInit(): void {
    this.route.navigate(['/home']);
  }
}
