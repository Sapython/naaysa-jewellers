import { ProductsService } from 'src/app/services/Products/products.service';
import { DataproviderService } from './../../services/dataprovider.service';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Observable } from '@firebase/util';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentPanel: string = 'Panel';
  breakpoint: number = 1000;
  largeScreen: boolean = window.innerWidth > this.breakpoint;
  showSidebar: boolean = false;
  @Input() name: string = 'Stupidita';

  public userId: any;
  public dbUserDetail: any;

  public updateProfileForm: FormGroup = new FormGroup({
    displayName: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    // photoURL: new FormControl(),
  });

  constructor(
    private router: Router,
    public dataproviderService: DataproviderService,
    public auth: AuthService,
    public productsService: ProductsService,
    private databaseService: DatabaseServiceService
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        // Update header heading
        const url = this.router.url;
        const urlArr = url.split('/');
        const panel = urlArr[urlArr.length - 1];
        const panelWords = panel.split('-');
        panelWords.forEach((word, index) => {
          panelWords[index] = word.charAt(0).toUpperCase() + word.substring(1);
        });
        this.currentPanel = panelWords.join(' ');
      }
    });
  }

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => {
      this.userId = res?.uid;
      this.getUser();
    });
  }

  public getUser() {
    this.databaseService
      .getDbUser(this.userId)
      .then((res) => {
        this.dbUserDetail = res.data();
        console.log(this.dbUserDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public updateProfile() {
    // console.log(this.userId)
    console.log(this.updateProfileForm.value);
    this.databaseService
      .updateUser(this.userId, this.updateProfileForm.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
