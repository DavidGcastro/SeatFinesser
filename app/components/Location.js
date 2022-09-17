import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import getLocation from '../utils/location';
import textStyle from '../styles/text';

const Location = ({style}) => {
  const [location, setLocation] = useState('');
  useEffect(() => {
    const locationAsync = async () => {
      setLocation(await getLocation());
    };
    locationAsync();
  }, []);
  return <Text style={{...textStyle.title, ...style}}>{location}</Text>;
};

export default Location;
