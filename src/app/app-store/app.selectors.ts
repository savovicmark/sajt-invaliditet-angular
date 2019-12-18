import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState, selectArticleAll } from './app.reducers';

export const selectArticleState = createFeatureSelector<ArticleState>('articles');
export const selectArticles = createSelector(
  selectArticleState,
  selectArticleAll
);
export const selectVijesti = createSelector(
  selectArticles,
  articles => articles.filter(article => article.type === 'vijest')
);
export const selectProjekti = createSelector(
  selectArticles,
  articles => articles.filter(article => article.type === 'projekat')
);
export const selectRealizovaniProjekti = createSelector(
  selectProjekti,
  projekti => projekti.filter(projekat => projekat.realizovan)
);
export const selectNerealizovanProjekti = createSelector(
  selectProjekti,
  projekti => projekti.filter(projekat => !projekat.realizovan)
);
