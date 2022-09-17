/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from './styles/global';
import Home from './views/Home';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle}>
        <Home />
      </View>
    </SafeAreaView>
  );
};

export default App;
