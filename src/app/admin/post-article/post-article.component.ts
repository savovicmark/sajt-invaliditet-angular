import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AdminState } from '../admin-store/admin.reducers';
import { ImageArticleService } from 'src/app/services/image-article.service';
import { ArticleModel } from 'src/app/Models/article.model';
import { PostArticleAction } from 'src/app/app-store/app.actions';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss']
})
export class PostArticleComponent implements OnInit {

  image: string;
  articleForm: FormGroup;

  constructor(private store: Store<AdminState>,
              private imageService: ImageArticleService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      naslov: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['vijest', [Validators.required]]
    });
  }

  onImageSelect(files) {
    const file: File = files.target.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);
    this.imageService.getImagePath(formData).subscribe(res => {
      this.image = res.file;
      console.log(res.file);
    });
  }

  submitArticle() {
    const article: ArticleModel = {
      naslov: this.articleForm.get('naslov').value,
      text: this.articleForm.get('text').value,
      image: this.image,
      type: this.articleForm.get('type').value
    };
    this.store.dispatch(new PostArticleAction({article}));
    this.articleForm.reset();
  }

}
