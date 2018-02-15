import { Component } from '@angular/core';

import { ParkListPage } from '../park-list/park-list';
import { ParkMapPage } from '../park-map/park-map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ParkListPage;
  tab2Root = ParkMapPage;

  constructor() {

  }
}
