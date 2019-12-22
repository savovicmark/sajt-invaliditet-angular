import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-store/app.reducers';
import { Store, select } from '@ngrx/store';
import { ArticleModel } from '../Models/article.model';
import { selectVijesti, selectProjekti } from '../app-store/app.selectors';
import { LoadAllArticlesAction } from '../app-store/app.actions';
import { baseUrl } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.scss']
})
export class NaslovnaComponent implements OnInit {

  baseUrl = baseUrl;
  vijesti: ArticleModel[];
  projekti: ArticleModel[];

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new LoadAllArticlesAction());
    this.store.pipe(select(selectVijesti)).subscribe(articles => this.vijesti = articles.slice(articles.length - 3));
    this.store.pipe(select(selectProjekti)).subscribe(articles => this.projekti = articles);
  }

  navigateToArticle(articleId: string) {
    this.router.navigate(['/article', articleId]);
  }

}
