import React, {useState, useEffect, useMemo} from 'react';
import {Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const {requestAuthorization, getCurrentPosition} = Geolocation;
import {GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_ENDPOINT} from '@env';

const Location = () => {
  const [coords, setCoords] = useState('');
  const [location, setLocation] = useState('');
  useEffect(() => {
    let authorization = 'denied';
    const getCoords = async () => {
      const getAuthorization = async () => {
        authorization = await requestAuthorization('whenInUse');
      };

      const hasAuthorization = () => authorization === 'granted';
      try {
        await getAuthorization();
        if (hasAuthorization) {
          const callback = data => {
            const {coords} = data;
            const {latitude, longitude} = coords;
            setCoords({latitude, longitude});
          };
          const errorCallback = error => {
            throw Error(error);
          };
          const options = {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          };
          getCurrentPosition(callback, errorCallback, options);
        }
      } catch (err) {
        throw Error(err);
      }
    };
    getCoords().catch(err => console.error(err));
  }, []);

  useMemo(() => {
    const getLocation = async () => {
      const {latitude, longitude} = coords;
      const endpoint = `${GOOGLE_MAPS_API_ENDPOINT}&latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
      let locationData = await fetch(endpoint);
      let {results} = await locationData.json();
      let location = results.length && results[0].address_components[0].long_name
      location && setLocation(location)
    };
    getLocation().catch(err => console.error(err));
  }, [coords]);

  return <Text style={{fontFamily: 'RoobertTrial-Bold', fontSize: 20, margin: 30}}>{location}</Text>;
};

export default Location;
