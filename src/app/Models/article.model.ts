export interface ArticleModel {
  _id?: string;
  naslov: string;
  text: string;
  image?: string;
  type?: string;
  realizovan?: boolean;
  createdAt?: Date;
}
