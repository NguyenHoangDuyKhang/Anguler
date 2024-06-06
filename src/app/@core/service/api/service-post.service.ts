import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class ServicePostService {
  url = 'https://knowledgehub.demopolyct.online/api/unit';
  url_page4 = 'https://knowledgehub.demopolyct.online/api/unit?page=1';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllPost(): Observable<any> {
    return this.http.get<any>(this.url, {
      headers: new HttpHeaders().set(
        'x-access-token',
        this.authService.getToken()
      ),
    });
  }

  getOnePost(id: number | 0): Observable<any> {
    return this.http.get(this.url + `/` + id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(this.url + `/` + id);
  }

  updatePost(id: number, data: any): Observable<any> {
    return this.http.put(this.url + '/' + id, data);
  }
}
