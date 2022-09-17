import {StyleSheet} from 'react-native';
import colorStyle from './colors';

const globalStyle = StyleSheet.create({
  paddingHorizontal: 20,
  spacer: {
    paddingBottom: 8,
  },
  divider: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: colorStyle.lightGray,
    borderWidth: 1,
  },
});

export default globalStyle;
