import { Component, Input } from "@angular/core";

@Component({
    selector: 'dailog',
    template: `<h1>HAHA {{name}}!</h1>`,
    // styleUrls: ['./products.component.scss']
  })

  export class DialogComponent {
    @Input() name!: string;
  }