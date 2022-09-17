import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import getLocation from '../utils/location';

const Home = () => {
  const [location, setLocation] = useState('');
  useEffect(() => {
    const location = async () => {
      setLocation(await getLocation());
    };
    location();
  }, []);
  return <Text>{location}</Text>;
};

export default Home;
