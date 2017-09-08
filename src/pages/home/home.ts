import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SuperTabsPage} from "../super-tabs/super-tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goSuperTabPage() {
    this.navCtrl.push(SuperTabsPage)
  }
}
