import { CollectionObject } from './collection-object.model';

interface Part {
    name: string,
    url: string
}

export interface Cpu extends Part {
    clockSpeed: number,
    model: string,
    interface: string,
    turboBoost: number,
    cache: number,
    gen: string,
    power: number,
    threads: number,
    architecture: number,
    manufacturer: string,
    needsCooling: boolean
}

export interface Gpu extends Part {
    chipset: string,
    interface: string,
    baseSpeed: number,
    boostSpeed: number,
    interfaceSize: string,
    memoryBandwidth: number,
    memoryType: string,
    memoryClock: number,
    maxScreenSize: string,
    power: string,
    outputs: number,
    minPowerSupply: number,
    size: string 
}

export interface Ram extends Part {
    interface: string,
    memoryType: string,
    memorySize: string,
    speed: number,
}

export interface PowerSupply extends Part {
    maxWatt: number,
    efficiency: number
}

export interface Storage extends Part {
    capacity: number,
    type: string,
    size: number
}

export interface FlashStorage extends Storage {
    interface: string,
    read: number,
    write: number
}

export interface HardDrive extends Storage {
    interface: string,
    rpm: number,
    read: number,
    write: number
}

export interface MotherBoard extends Part {
    cpuInterface: string,
    chipset: string,
    gpuInterface: string,
    ramInterface: string,
    ramSlots: string,
    memSpeed: number,
    internalConnectiosForStorage: Array<string>,
    size: string,
    outputSize: string
}
