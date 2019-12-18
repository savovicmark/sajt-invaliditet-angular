import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-store/app.reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../Models/user.model';
import { PostUserAction } from '../app-store/app.actions';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }

  submitForm() {
    console.log(this.userForm.value);
    const user: UserModel = {
      username: this.userForm.get('username').value,
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value
    };
    this.store.dispatch(new PostUserAction({user}));
    this.userForm.reset();
  }

}
