'use client';

import React, { useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Map } from '@/components/ui/map';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map center={{ lat: latitude, lng: longitude }} zoom={17} />
      <Box className="h-[10vh]">
        <Button className="text-xl w-full h-full uppercase">
          Confirmar ubicación 🐶
        </Button>
      </Box>
    </Wrapper>
  );
};

export default LocationComponent;
