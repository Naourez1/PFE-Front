import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navService: NavService, private _authService : AuthService) { }

  ngOnInit() {
  }

  hideSide(){
      this.navService.hideSideBar = !this.navService.hideSideBar;
  }

}
