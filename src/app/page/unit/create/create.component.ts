import { Component, OnInit } from '@angular/core';
import { ServicePostService } from './../../../@core/service/api/service-post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { error } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  name: any;
  address: any;
  description: any;
  postData!: FormGroup;
  constructor(private unit: ServicePostService, private router: Router) { 
  
  }

  ngOnInit(): void {

    // this.submitForm();
    this.postData = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  submitForm() {
    if(this.postData.valid){
      const postData = {
        name: this.name,
        address: this.address,
        description: this.description
      };
      this.post(postData);
     
    } else{
      alert('Lỗi, Vui lòng nhập đầy đủ thôn tin các trường dữ liệu!');
    }
    this.router.navigateByUrl('/unit');
    
  }
  

  post(data: any) {
    this.unit.postData(data).subscribe(
      (res) => {
        console.log('Post Success:', res);
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
