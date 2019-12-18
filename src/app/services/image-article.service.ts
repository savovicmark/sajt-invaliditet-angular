import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageArticleService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  getImagePath(data: FormData): Observable<{file: string}> {
    return this.http.post<{file: string}>(`${this.baseUrl}/image/single`, data);
  }
}
