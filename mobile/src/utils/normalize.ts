import {Dimensions, NativeModules, PixelRatio, Platform} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HIGHT} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT as number;

// Normalize Fun
const scale = SCREEN_WIDTH / 390;
export const px = (size: number) => {
  const newSize = size * scale;

  return newSize;
};
const scaleH = (SCREEN_HIGHT - STATUSBAR_HEIGHT) / 844;
export const pxH = (size: number) => {
  const newSize = size * scaleH;
  return newSize;
};

export const fontSize = (size: number) => {
  const newSize = (size * SCREEN_WIDTH) / 390;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// export const fontSize = (size: number) => {
//   const screenWidth = Dimensions.get('window').width;
//   const scaleFactor = PixelRatio.getFontScale();
//   const standardScreenWidth = 375; // A standard screen width for which the font size is designed
//   const scaleFactorWidth = screenWidth / standardScreenWidth;
//   const adjustedSize = size * scaleFactor * scaleFactorWidth;
//   return adjustedSize;
// };
