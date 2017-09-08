import {Events, IonicPage, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {SuperTabsController} from "ionic2-super-tabs";
import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the SuperTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-super-tabs',
    templateUrl: 'super-tabs.html',
})
export class SuperTabsPage {

  homePage: any = HomePage;
  aboutPage: any = AboutPage;
  contactPage: any = ContactPage;

    constructor(private superTabsCtrl: SuperTabsController,
                private navParams: NavParams,
                private events: Events) {
    }

    ionViewDidLeave() {
    }

    hideToolbar() {
        this.superTabsCtrl.showToolbar(false);
    }

    showToolbar() {
        this.superTabsCtrl.showToolbar(true);
    }

    onTabSelect(ev: any) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    }

    ionViewDidLoad() {
    }

}
