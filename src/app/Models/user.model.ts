export interface UserModel {
  _id?: string;
  username: string;
  password?: string;
  verified?: boolean;
  banned?: boolean;
  email: string;
}
