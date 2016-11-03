import { MongoObservable } from 'meteor-rxjs';
import { Profile } from '../models/users.model';

export const ProfilesOvservable = new MongoObservable.Collection<Profile>('profiles');

