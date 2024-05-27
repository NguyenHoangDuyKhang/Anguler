import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-component',
  template: `<app-header></app-header>
            <router-outlet></router-outlet>`,
//   styleUrls: ['./header.component.scss']
})
export class PageComponent {

}
