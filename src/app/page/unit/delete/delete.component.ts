import { Component, OnInit } from '@angular/core';
import { ServicePostService } from './../../../@core/service/api/service-post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private unit: ServicePostService) { }
  listData: any;
  selectedId: number | null = 0;
  ngOnInit(): void {
  }

  deleteUnit(id: number) {
    this.unit.deletePost(id).subscribe(
      (res) => {
        console.log('Delete Success:',res);
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

}
