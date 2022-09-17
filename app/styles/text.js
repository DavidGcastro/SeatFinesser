import {StyleSheet} from 'react-native';
import colorStyle from './colors';
const textStyle = StyleSheet.create({
  title: {
    fontFamily: 'RoobertTRIAL-Bold',
    fontSize: 28,
  },
  detail: {
    bold: {
      fontFamily: 'RoobertTRIAL-SemiBold',
      color: colorStyle.gray,
      fontSize: 18,
      letterSpacing: 0.5,
    },
  },
});

export default textStyle;
