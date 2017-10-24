import { Component } from '@angular/core';

/* See https://material.angular.io/components/sidenav/api */
import {MatSidenavModule} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent {}

@Component({
  selector: 'app-sidenav-button',
  templateUrl: './sidenav.component.button.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavButtonComponent {}
// export class SidenavComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
