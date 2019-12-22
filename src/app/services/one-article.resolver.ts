import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleModel } from '../Models/article.model';
import { AppState } from '../app-store/app.reducers';
import { Store, select } from '@ngrx/store';
import { selectArticleById } from '../app-store/app.selectors';
import { tap, filter, first } from 'rxjs/operators';
import { LoadArticleByIdAction, LoadAllCommentsForArticleAction } from '../app-store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class OneArticleResolver implements Resolve<Observable<ArticleModel>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // tslint:disable-next-line: no-string-literal
    const articleId = route.params['articleId'];
    console.log(articleId);

    return this.store.pipe(
      select(selectArticleById(articleId)),
      tap(article => {
        if (!article) {
          this.store.dispatch(new LoadArticleByIdAction({articleId}));
        }
      }),
      filter(article => !!article),
      tap(article => {
        this.store.dispatch(new LoadAllCommentsForArticleAction({articleId}));
      }),
      first()
    );

  }
}
