import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})

export class PaginatorComponent implements OnInit {
  @Input() api_url!: string;
  @Input() current_page!: number;
  @Input() last_page!: number;
  @Output() dataList: EventEmitter<any> = new EventEmitter();

  indexPage = 1;
  hasPreviousPage: boolean = true;
  hasNextPage: boolean = false;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  goFirstPage() {
    this.hasPreviousPage = true;
    this.hasNextPage = false;
    this.current_page = 1;
    this.getData();
  }

  goLastPage() {
    this.hasPreviousPage = false;
    this.hasNextPage = true;
    this.current_page = this.last_page;
    this.getData();
  }
  goPreviousPage() {
    if (this.indexPage <= this.last_page && this.indexPage > 1) {
      this.hasNextPage = false;
      this.indexPage--;
      if (this.indexPage === 1) {
        this.hasPreviousPage = true;
      }      
      this.current_page = this.indexPage; 
      this.getData();
    }
  }

  goNextPage() {
    if (this.indexPage < this.last_page) {
      this.hasPreviousPage = false;
      this.indexPage++;
      if (this.indexPage === this.last_page) {
        this.hasNextPage = true;
      }
      this.current_page = this.indexPage;
      
      this.getData();
    }
  }

  getPaginator(): Observable<any>{
    return this.http.get(`${this.api_url}?page=${this.indexPage}`);
  }

  getData(){
    this.getPaginator().subscribe(res => {
      this.dataList.emit(res);
    }, error =>{
      console.log(error);
    })
  }
}
