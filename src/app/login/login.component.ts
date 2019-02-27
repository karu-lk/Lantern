import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navControl: NavController) { }

  ngOnInit() {
  }

  login() {
    if (true) {
      this.navControl.navigateForward('/home');
    }
  }

}
