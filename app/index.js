/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Home, Tickets, Search, Profile, Favorites} from './views'
const {Navigator, Screen} = createBottomTabNavigator();
const MyTheme = {
  colors: {
    background: 'white'
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Navigator screenOptions={{headerShown: false}}
        >
          <Screen name="Home" component={Home} />
          <Screen name='Search' component={Search}/>
          <Screen name="Tickets" component={Tickets} />
          <Screen name='Favorites' component={Favorites}/>
          <Screen name='Profile' component={Profile}/>
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
