import { Component, OnInit } from '@angular/core';
import { ChangeThemeService } from '../services/change-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themeClass = 'default';
  logo='';
  constructor(private themeService : ChangeThemeService) {
    this.logo = '../../assets/images/logo.png';
  }


  ngOnInit() {
  }
  changeTheme(theme){
      this.themeService.changeThemes(theme);
      localStorage.setItem('theme',theme);
  }

}
