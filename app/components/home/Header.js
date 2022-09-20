import React from 'react';
import Location from '../Location';
import {View, Text} from 'react-native';
import textStyle from '../../styles/text';
import globalStyle from '../../styles/global';

const HomeHeader = () => {
  return (
    <View style={globalStyle.divider}>
      <Location style={globalStyle.spacer} />
      <Text style={{...textStyle.detail.bold, ...globalStyle.spacer}}>
        All dates
      </Text>
    </View>
  );
};

export default HomeHeader;
