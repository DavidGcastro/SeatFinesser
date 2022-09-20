import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeHeader} from '../components/home';
import globalStyle from '../styles/global';

const Home = () => {
  return (
    <SafeAreaView style={globalStyle}>
      <HomeHeader />
    </SafeAreaView>
  );
};

export default Home;
