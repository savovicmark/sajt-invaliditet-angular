import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VijestiComponent } from './vijesti/vijesti.component';
import { OneArticleComponent } from './one-article/one-article.component';
import { OneArticleResolver } from './services/one-article.resolver';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { RealizovaniComponent } from './realizovani/realizovani.component';
import { NerealizovaniComponent } from './nerealizovani/nerealizovani.component';

const routes: Routes = [
  {path: '', redirectTo: 'naslovna', pathMatch: 'full'},
  {path: 'vijesti', component: VijestiComponent},
  {path: 'article/:articleId', component: OneArticleComponent, resolve: {article: OneArticleResolver}},
  {path: 'naslovna', component: NaslovnaComponent},
  {path: 'projekti/realizovani', component: RealizovaniComponent},
  {path: 'projekti/nerealizovani', component: NerealizovaniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
