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
import {Home, Tickets, Search, Profile, Favorites} from './views';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colorStyle from './styles/colors';
const {Navigator, Screen} = createBottomTabNavigator();
const MyTheme = {
  colors: {
    background: 'white',
  },
};
const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    size = 28;
    let icon;
    switch (route.name) {
      case 'Home':
        let iconName = focused ? 'home' : 'md-home-outline';
        icon = <Ionicons name={iconName} size={size} color={color} />;
        break;
      case 'Search':
        icon = <AntDesign name="search1" size={size} color={color} />;
        break;
      case 'Tickets':
        icon = (
          <Foundation
            name="ticket"
            size={size}
            color={color}
            style={{transform: [{rotate: '-45deg'}]}}
          />
        );
        break;
      case 'Favorites':
        icon = (
          <FontAwesome
            name={focused ? 'heart' : 'heart-o'}
            size={size}
            color={color}
          />
        );
        break;
      case 'Profile':
        icon = (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={size}
            color={color}
          />
        );
        break;
    }
    return icon;
  },
  headerShown: false,
  tabBarActiveTintColor: colorStyle.gatorade,
  tabBarInactiveTintColor: colorStyle.black,
  tabBarLabel: () => {
    return null;
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Navigator screenOptions={screenOptions}>
          <Screen name="Home" component={Home} />
          <Screen name="Search" component={Search} />
          <Screen name="Tickets" component={Tickets} />
          <Screen name="Favorites" component={Favorites} />
          <Screen name="Profile" component={Profile} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
