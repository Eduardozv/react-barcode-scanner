import { type FunctionComponent, useEffect, useRef } from 'react'
import { useCamera, useScanning, type ScanOptions } from '../hooks'
import { type DetectedBarcode } from '../types'

interface ScannerProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  options?: ScanOptions
  onCapture?: (barcode: DetectedBarcode) => any
  trackConstraints?: MediaTrackConstraints;
}

const BarcodeScanner: FunctionComponent<ScannerProps> = ({
  options,
  onCapture,
  trackConstraints,
  ...props
}) => {
  const instance = useRef<HTMLVideoElement>(null)
  const [isCameraSupport] = useCamera(instance, trackConstraints)
  const [detected, open, close] = useScanning(instance, options)

  useEffect(() => {
    if (isCameraSupport) {
      open()
    } else {
      close()
    }
  }, [close, isCameraSupport, open])

  useEffect(() => {
    if (detected !== undefined) {
      onCapture?.(detected)
    }
  }, [detected, onCapture])

  return (
    <video
      ref={instance}
      /**
       * `object-fit: cover` will automatically fill the entire video,
       * if the aspect ratio not match with camera,
       * it will cause enlargement screen, so user need consider it
       */
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      autoPlay
      muted
      /**
       * set video play in element to fix iOS black screen error
       */
      playsInline
      {...props}
    />
  )
}

export default BarcodeScanner
