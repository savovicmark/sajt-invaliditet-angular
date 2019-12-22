import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { CommentModel, CommentStringModel } from '../Models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  postComment(comment: CommentStringModel): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.baseUrl}/comments`, comment);
  }

  getAllCommentsForArticle(articleId: string): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.baseUrl}/comments/getcomments/${articleId}`);
  }

  postReplyToComment(commentId: string, userId: string, text: string): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.baseUrl}/comments/reply`, {commentId, userId, text});
  }

  deleteComment(commentId: string): Observable<CommentModel> {
    return this.http.delete<CommentModel>(`${this.baseUrl}/comments/comment/${commentId}`/*, {
      params: new HttpParams().set('commentId', commentId)
    }*/);
  }

  deleteReply(commentId: string, replyId: string): Observable<CommentModel> {
    return this.http.delete<CommentModel>(`${this.baseUrl}/comments/reply/${replyId}/${commentId}`/*, {
      params: new HttpParams().set('replyId', replyId).set('commentId', commentId)
    }*/);
  }

}
