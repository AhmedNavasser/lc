import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import particleConfig from '../../particlesjs-config.json';
import { ChangeThemeService } from '../services/change-theme.service.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ChangeThemeService]
})
export class HomeComponent implements OnInit, DoCheck {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  themeClass = '';
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

    this.myParams = {
      particles: {
        number: {
          value: 180,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }

  constructor(private route: Router, private themeService: ChangeThemeService) {
    this.themeService.toggleThemeObservable.subscribe((theme: string) => {
      this.themeClass = theme;
    });
  }
  ngDoCheck(): void {
    this.themeService.toggleThemeObservable.subscribe((theme: string) => {
      this.themeClass = theme;
    });
  }
  onRegister() {
    this.route.navigate(['/register']);
  }
  toggleFlip(value) {
    switch (value) {
      case 1:
      this.route.navigate(['/register']);
        break;
        case 2:
        this.route.navigate(['/laleCard']);
          break;
          case 3:
          this.route.navigate(['/register']);
            break;
      default:
        break;
    }
  }
}
