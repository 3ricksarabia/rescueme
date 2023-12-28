'use client';

import { FC, useEffect, useRef } from 'react';

interface MapsProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map: FC<MapsProps> = ({ center, zoom }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: true,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        draggable: true,
        map,
      });

      map.addListener('dragend', () => {
        marker.setPosition(map.getCenter() as google.maps.LatLng);
      });

      marker.addListener('dragend', () => {
        map.setCenter(marker.getPosition() as google.maps.LatLng);
      });
    }
  }, [center, ref, zoom]);

  return <div ref={ref} id="map" style={{ width: '100vw', height: '90vh' }} />;
};

export { Map };
