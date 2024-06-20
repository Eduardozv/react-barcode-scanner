import { type RefObject } from 'react';
import { type DetectedBarcode } from '../types';
export interface ScanOptions {
    delay?: number;
    formats?: string[];
}
export declare function useScanning(ref: RefObject<HTMLVideoElement>, provideOptions?: ScanOptions): [DetectedBarcode | undefined, () => void, () => void];
