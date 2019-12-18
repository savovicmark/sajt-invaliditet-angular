import { AppState } from 'src/app/app-store/app.reducers';
import { UserModel } from 'src/app/Models/user.model';

export interface AdminState extends AppState {
  users: UserModel[];
}
