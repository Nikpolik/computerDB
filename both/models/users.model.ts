import { CollectionObject } from './collection-object.model';

export interface Profile extends CollectionObject {
    picture: string,
    description: string
}