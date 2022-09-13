/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
 } from 'react-native';
 import {CLIENT_ID} from "@env"


const App = () => {
   return (
   <Text style={{fontFamily: 'RoobertTRIAL-Medium', marginTop: 450}}>{CLIENT_ID} DAVID</Text>
   );
 };
 
 
 export default App;
 