import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },

  cardText: {
    width: sizes.screenWidth * 0.6,
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
  faqText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
