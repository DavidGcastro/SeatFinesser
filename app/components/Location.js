import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {DEFAULT_CITY} from '@env';
import getLocation from '../utils/location';
import textStyle from '../styles/text';

const Location = ({style}) => {
  const [location, setLocation] = useState('');
  useEffect(() => {
    const locationAsync = async () => {
      try {
        setLocation(await getLocation());
      } catch (err) {
        setLocation(DEFAULT_CITY);
        console.error(err);
      }
    };
    locationAsync();
  }, []);
  return <Text style={{...textStyle.title, ...style}}>{location}</Text>;
};

export default Location;
