import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.015,
    paddingRight: sizes.screenWidth * 0.035,
  },
  bold: {fontWeight: 'bold'},
  textColor: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  height: {
    height: sizes.screenHeight * 0.72,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
  },
  diasbledView: {
    backgroundColor: colors.disabledBg2,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonTop: {
    marginTop: sizes.screenHeight * 0.01,

  },
});