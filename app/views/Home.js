import React, {useState, useEffect} from 'react';
import {Container, Label, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const {requestAuthorization} = Geolocation;

const Home = () => {
  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    const getPermission = async () => {
      const x = await requestAuthorization( "whenInUse");
      console.log(x)
    }
    getPermission()
  }, []);

  return <Text>foo</Text>;
};

export default Home;
