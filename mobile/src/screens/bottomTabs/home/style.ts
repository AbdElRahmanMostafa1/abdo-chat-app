import {COLORS, FONTS} from '@src/theme';
import layouts from '@src/theme/layout';
import {fontSize, px, pxH} from '@src/utils';
import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('screen').width,
    height: px(140),
    alignSelf: 'center',
  },
  title: {
    color: COLORS.PINK,
    fontFamily: FONTS.BOLD,
    fontSize: fontSize(16),
    alignSelf: 'center',
    ...layouts.pt.xxl,
    ...layouts.pb.sm,
  },
});
