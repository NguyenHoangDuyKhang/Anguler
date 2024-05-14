import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss']
})
export class Lab3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student = {
    Name: 'Nguyễn Hoàng Duy Khang',
    img: 'https://i.pinimg.com/564x/55/04/37/550437ed7d55e3d1e8151b9f5c1297ad.jpg',
    Gender: 'Nam',
    Date_of_birth: '13/03/2004',
    Medium_score: 4.9,
  };
}
