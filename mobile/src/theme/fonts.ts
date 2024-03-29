import {Platform, I18nManager} from 'react-native';

export const FONTS = {
  LIGHT: I18nManager?.isRTL ? 'NotoSansArabic-Light' : 'NotoSans-Light',
  REGULAR: I18nManager?.isRTL ? 'NotoSansArabic-Regular' : 'NotoSans-Regular',
  MEDIUM: I18nManager?.isRTL ? 'NotoSansArabic-Medium' : 'NotoSans-Medium',
  SEMI_BOLD: I18nManager?.isRTL
    ? 'NotoSansArabic-SemiBold'
    : 'NotoSans-SemiBold',
  // BOLD: I18nManager?.isRTL ? 'NotoSansArabic-Bold' : 'NotoSans-Bold',
  BOLD: 'NotoSansArabic-Bold',
};
