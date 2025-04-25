
import { scale } from '@/lib/shared';
import { Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  lightWhite: '#fcfcfc',
  primary1: '#006046',
  primary: '#000A4A',
  secondary: '#00C6FB',
  background: '#FCFFF7',
  gray: '#DEDEDE',
  deepBlue: '#001F55',
  red: '#FF3D00',
  green: '#619949',
  gray300: '#F3F4F7',
  purple: '#9F56D4',
  gray500: '#120542',
  tertiary1: '#F6EFFB',
  gray_disabled: '#DBDCDF'
};

export const SIZES = {
  base: height * 0.01,
  font: height * 0.0175,
  radius: 8,
  padding: height * 0.03,
  navTitle: height * 0.04375,
  h1: height * 0.0375,
  h2: height * 0.0275,
  h2a: height * 0.034,
  h2c: height * 0.0245,
  h3: height * 0.0225,
  h3a: height * 0.0220,
  h3c: height * 0.020,
  h4: height * 0.0175,
  h5: height * 0.015,
  h5b: height * 0.013,
  h56a: scale(5),
  width,
  height,
};

export const FONTS = {
  navTitle: { fontFamily: 'ClashGrotesk-Bold', fontSize: SIZES.navTitle },
  largeTitleBold: {
    fontFamily: 'ClashGrotesk-Bold',
  },
  semiBoldText: {
    fontFamily: 'ClashGrotesk-SemiBold',
  },
  boldText: {
    fontFamily: 'ClashGrotesk-Bold',
  },
  mediumText: {
    fontFamily: 'ClashGrotesk-Medium',
  },
  regularText: {
    fontFamily: 'ClashGrotesk-Regular',
  },
  lightText: {
    fontFamily: 'ClashGrotesk-Light',
  },
  // ... (other font styles)
};

const appTheme = { COLORS, SIZES, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH };

export default appTheme;
