import { MongoObservable } from 'meteor-rxjs';
import * as PartsInterfaces from '../models/computer.model';

export const Cpus = new MongoObservable.Collection<PartsInterfaces.Cpu>('cpus');
export const Gpus = new MongoObservable.Collection<PartsInterfaces.Gpu>('gpus');
export const Ram = new MongoObservable.Collection<PartsInterfaces.Ram>('rams');
export const PowerSupplies = new MongoObservable.Collection<PartsInterfaces.PowerSupply>('powersupplies');
export const Storages = new MongoObservable.Collection<PartsInterfaces.Storage>('storage');
export const MotherBoard = new MongoObservable.Collection<PartsInterfaces.MotherBoard>('motherboards');

