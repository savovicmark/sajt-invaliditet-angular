import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { MaterialModule } from './material.module';
import { SearchInputComponent } from './search-input/search-input.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { AdminModule } from './admin.module';
import { environment } from 'src/environments/environment';
import { AppEffects } from './app-store/app.effects';
import { articleReducer, commentReducer, userReducer } from './app-store/app.reducers';
import { PostUserComponent } from './post-user/post-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OneArticleComponent } from './one-article/one-article.component';
import { KomentarComponent } from './komentar/komentar.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { VijestiComponent } from './vijesti/vijesti.component';
import { NerealizovaniComponent } from './nerealizovani/nerealizovani.component';
import { RealizovaniComponent } from './realizovani/realizovani.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    NaslovnaComponent,
    PostUserComponent,
    OneArticleComponent,
    KomentarComponent,
    SingleArticleComponent,
    VijestiComponent,
    NerealizovaniComponent,
    RealizovaniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    StoreModule.forRoot({articles: articleReducer,
                        comments: commentReducer,
                        user: userReducer
                        }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
