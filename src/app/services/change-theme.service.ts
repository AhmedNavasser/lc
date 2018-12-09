import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class ChangeThemeService {
    themeClass = 'default';
    private toggleThemeSubject = new Subject();
    toggleThemeObservable = this.toggleThemeSubject.asObservable();
  constructor() { }

  changeThemes(theme : string){
     this.toggleThemeSubject.next(theme);
  }
}
