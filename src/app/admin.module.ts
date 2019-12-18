import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { PostArticleComponent } from './admin/post-article/post-article.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [PostArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule
  ],
  exports: [PostArticleComponent],
  providers: []
})
export class AdminModule { }
