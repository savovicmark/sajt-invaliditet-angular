import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState, selectArticleAll, selectArticleEntities, CommentState, selectCommentAll } from './app.reducers';

export const selectArticleState = createFeatureSelector<ArticleState>('articles');
export const selectArticles = createSelector( // array
  selectArticleState,
  selectArticleAll
);
export const selectArticlesEnt = createSelector( // entity
  selectArticleState,
  selectArticleEntities
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

export const selectArticleById = (id: string) => createSelector(
  selectArticlesEnt,
  articles => articles[id]
);
// ========================================================================

export const selectCommentsState = createFeatureSelector<CommentState>('comments');
export const selectCommentsArr = createSelector(
  selectCommentsState,
  selectCommentAll
);

export const selectAllCommentsForArticle = (articleId: string) => createSelector(
  selectCommentsArr,
  comments => comments.filter(comment => comment.article === articleId)
);


