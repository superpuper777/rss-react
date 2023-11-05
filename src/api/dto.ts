import { PeopleItem } from '../components/List/ListItem/type';

export type ResponseData = {
  count: number;
  next: string | null;
  previous: number | null;
  results: Array<PeopleItem> | [];
};
