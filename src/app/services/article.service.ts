import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ArticleModel } from '../Models/article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${this.baseUrl}/articles`);
  }

  getArticleById(id: string): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(`${this.baseUrl}/articles`, {
      params: new HttpParams().set('articleId', id)
    });
  }

  postArticle(article: ArticleModel): Observable<ArticleModel> {
     return this.http.post<ArticleModel>(`${this.baseUrl}/articles`, article);
  }

  updateArticleById(articleId: string, article: ArticleModel): Observable<ArticleModel> {
    return this.http.patch<ArticleModel>(`${this.baseUrl}/articles`, {articleId, article});
  }

  deleteArticleById(articleId: string): Observable<ArticleModel> {
    return this.http.delete<ArticleModel>(`${this.baseUrl}/articles`, {
      params: new HttpParams().set('articleId', articleId)
    });
  }

}
