import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating:number = 0;
  // @Output() ratingClick :EventEmitter<string> = new EventEmitter<string>();
  @Output() funcStar : EventEmitter<string> = new EventEmitter<string>();
  StartWith: number = 0;
  constructor() { 
  }

  ngOnInit(): void {
  this.StartWith = this.rating*90/5;   
  }

  onClick(): void{
  const message = `Đánh giá của sản phẩm là ${this.rating} sao!`;
  this.funcStar.emit(message);
  alert(message);
  }
}