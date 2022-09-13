import { Component } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naaysa-jewellers';
  constructor(private auth:AuthService){}
  isheadervisible(){
    return window.location.pathname.startsWith('/admin')
  }
}
