import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route:Router) {}
  result: any = [];
  ngOnInit(): void {
    let id = this.router.snapshot.params.id;
    // console.log(id);
    let data = JSON.parse(localStorage.getItem('data') ?? '');
    // console.log(data);
     this.result = data.find((item: any) => item.productId === Number(id));
    // console.log( this.result);
    if(this.result === undefined){
      this.route.navigate(['/path-to-404']);
    }
  }
}