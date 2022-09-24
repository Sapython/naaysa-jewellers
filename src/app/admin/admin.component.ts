import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  currentPanel: string = 'Panel';
  breakpoint: number = 1000;
  largeScreen: boolean = window.innerWidth > this.breakpoint;
  showSidebar: boolean = false;
  userId:any;
  dbUserDetail:any

  constructor(private router: Router, private auth:AuthService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const urlArr = url.split('/');
        const panel = urlArr[urlArr.length - 1];
        const panelWords = panel.split('-');
        panelWords.forEach((word, index) => {
          panelWords[index] = word.charAt(0).toUpperCase() + word.substring(1);
          console.log(panelWords);
          this.currentPanel=panelWords.join(' ');
          console.log(this.currentPanel);
        });
        this.currentPanel = panelWords.join(' ');
      }
    });
  }

  ngOnInit() { this.auth.getUser.subscribe( (res) => { this.userId = res?.uid; this.getUser() })

  }

  public getUser() {
    this.auth.getDbUser(this.userId).then((res) => {
     this.dbUserDetail = res.data()
     console.log(this.dbUserDetail)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  onWindowResize() {
    this.largeScreen = window.innerWidth > this.breakpoint;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    document.documentElement.style.setProperty(
      '--overlay-width',
      !this.largeScreen && this.showSidebar ? '100%' : '0%'
    );
  }
}
