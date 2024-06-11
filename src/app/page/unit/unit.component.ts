import { Component, OnInit } from '@angular/core';
import { ServicePostService } from './../../@core/service/api/service-post.service';


@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent implements OnInit {
  listData: any;
  GetOne: any;
  selectedId: number | null = 0;

  last_Page: number = 0;
  cur_Page: number = 0;
  API_URL:string = 'https://knowledgehub.demopolyct.online/api/unit';
  constructor(private unit: ServicePostService) {
  }
  units: any;
  name: any;
  address: any;
  description: any;

  ngOnInit(): void {
    this.getAllUnit();
  }

  getAllUnit() {
    this.unit.getAllPost().subscribe(
      (res) => {
        this.listData = res.data;
        this.cur_Page = res.meta.current_page;
        this.last_Page = res.meta.last_page;
        console.log(this.cur_Page);
        console.log(this.last_Page);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOneUnit(id: number) {
    this.unit.getOnePost(id).subscribe(
      (res) => {
        this.GetOne = res.data;
        console.log(this.GetOne);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPage(res: any){
    this.listData = res.data;
    console.log(res);
  }

  deleteUnit(id: number) {
    this.unit.deletePost(id).subscribe(
      (res) => {
        console.log('Delete Success:', res);
        const index = this.listData.findIndex((item:any) => item.id === id);
        if (index !== -1) {
          this.listData.splice(index, 1); // Xóa phần tử khỏi mảng
        }
      },    
      (error) => {
        console.log(error);
      }
    );
  }


  submitForm() {  
    this.update(this.GetOne.id , this.GetOne);
  }


  update(id:number , data: any) {
    this.unit.updatePost(id, data).subscribe(
      (res) => {
        console.log('Pust Success:', res);
        console.log(res);
        this.getAllUnit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
