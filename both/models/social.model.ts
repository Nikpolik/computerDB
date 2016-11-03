import { CollectionObject } from './collection-object.model';

export interface Comment {
  date: string,
  author: string, 
}

export interface Tag extends CollectionObject {
  name: string
}