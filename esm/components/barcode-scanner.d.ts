import { type FunctionComponent } from 'react';
import { type ScanOptions } from '../hooks';
import { type DetectedBarcode } from '../types';
interface ScannerProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    options?: ScanOptions;
    onCapture?: (barcode: DetectedBarcode) => any;
    trackConstraints: any;
}
declare const BarcodeScanner: FunctionComponent<ScannerProps>;
export default BarcodeScanner;
