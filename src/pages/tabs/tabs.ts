import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MediaPage } from '../media/media';
import { AnalyticsPage } from '../analytics/analytics';
import { FeedbackPage } from '../feedback/feedback';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MediaPage;
  tab3Root = AnalyticsPage;
  tab4Root = FeedbackPage;
  tab5Root = AccountPage;

  constructor(public navCtrl: NavController) {

  }
}
