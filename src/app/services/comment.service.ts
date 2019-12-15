import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { CommentModel } from '../Models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  postComment(comment: CommentModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.baseUrl}/comments`, comment);
  }

  getAllCommentsForArticle(articleId: string): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}/comments`, {
      params: new HttpParams().set('articleId', articleId)
    });
  }

  postReplyToComment(commentId: string, userId: string, text: string): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.baseUrl}/comments/reply`, {commentId, userId, text});
  }

}
