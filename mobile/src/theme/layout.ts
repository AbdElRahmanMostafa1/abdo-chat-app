import {px, pxH} from '@src/utils';
import {ViewStyle} from 'react-native';

export const spacing = {
  zero: px(0),
  xs: px(2),
  sm: px(4),
  md: px(8),
  lg: px(10),
  mlg: px(12),
  mmlg: px(14),
  xl: px(16),
  xxl: px(25),
  xxxl: px(32),
  xxxxl: px(60),
  bigxl: px(500),
};

export const spacingH = {
  zero: pxH(0),
  xs: pxH(2),
  sm: pxH(4),
  md: pxH(8),
  lg: pxH(10),
  mlg: pxH(12),
  mmlg: pxH(14),
  xl: pxH(16),
  xxl: pxH(24),
  xxxl: pxH(32),
  xxxxl: pxH(60),
  bigxl: pxH(500),
};

const layouts = {
  // const layouts = {
  // **** FlexBox alignment ****
  row: {flexDirection: 'row'} as ViewStyle,
  column: {flexDirection: 'column'} as ViewStyle,
  rowReversed: {flexDirection: 'row-reverse'} as ViewStyle,
  justifyBetween: {justifyContent: 'space-between'} as ViewStyle,
  justifyAround: {justifyContent: 'space-around'} as ViewStyle,
  justifyStart: {justifyContent: 'flex-start'} as ViewStyle,
  justifyEnd: {justifyContent: 'flex-end'} as ViewStyle,
  justifyCenter: {justifyContent: 'center'} as ViewStyle,
  xCentered: {justifyContent: 'center'} as ViewStyle,
  yCentered: {alignItems: 'center'} as ViewStyle,
  alignedEnd: {alignItems: 'flex-end'} as ViewStyle,
  alignStart: {alignItems: 'flex-start'} as ViewStyle,
  flexed: {flex: 1} as ViewStyle,
  flexGrow: {flexGrow: 1} as ViewStyle,
  allCentered: {justifyContent: 'center', alignItems: 'center'} as ViewStyle,
  fullWidth: {width: '100%'} as ViewStyle,
  selfCenter: {alignSelf: 'center'} as ViewStyle,
  selfStart: {alignSelf: 'flex-start'} as ViewStyle,
  // Padding
  ps: {
    zero: {paddingStart: spacing.zero},
    xs: {paddingStart: spacing.xs},
    sm: {paddingStart: spacing.sm},
    md: {paddingStart: spacing.md},
    lg: {paddingStart: spacing.lg},
    mlg: {paddingStart: spacing.mlg},
    mmlg: {paddingStart: spacing.mmlg},
    xl: {paddingStart: spacing.xl},
    xxl: {paddingStart: spacing.xxl},
    xxxl: {paddingStart: spacing.xxxl},
  },

  pe: {
    zero: {paddingEnd: spacing.zero},
    xs: {paddingEnd: spacing.xs},
    sm: {paddingEnd: spacing.sm},
    md: {paddingEnd: spacing.md},
    lg: {paddingEnd: spacing.lg},
    mlg: {paddingEnd: spacing.mlg},
    mmlg: {paddingEnd: spacing.mmlg},
    xl: {paddingEnd: spacing.xl},
    xxl: {paddingEnd: spacing.xxl},
    xxxl: {paddingEnd: spacing.xxxl},
  },

  pt: {
    zero: {paddingTop: spacingH.zero},
    xs: {paddingTop: spacingH.xs},
    sm: {paddingTop: spacingH.sm},
    md: {paddingTop: spacingH.md},
    lg: {paddingTop: spacingH.lg},
    mlg: {paddingTop: spacingH.mlg},
    mmlg: {paddingTop: spacingH.mmlg},
    xl: {paddingTop: spacingH.xl},
    xxl: {paddingTop: spacingH.xxl},
    xxxl: {paddingTop: spacingH.xxxl},
    xxxxl: {paddingTop: spacingH.xxxxl},
  },

  pb: {
    zero: {paddingBottom: spacingH.zero},
    xs: {paddingBottom: spacingH.xs},
    sm: {paddingBottom: spacingH.sm},
    md: {paddingBottom: spacingH.md},
    lg: {paddingBottom: spacingH.lg},
    mlg: {paddingBottom: spacingH.mlg},
    mmlg: {paddingBottom: spacingH.mmlg},
    xl: {paddingBottom: spacingH.xl},
    xxl: {paddingBottom: spacingH.xxl},
    xxxl: {paddingBottom: spacingH.xxxl},
    xxxxl: {paddingBottom: spacingH.xxxxl},
    bigxl: {paddingBottom: spacingH.bigxl},
  },

  px: {
    zero: {paddingHorizontal: spacing.zero},
    xs: {paddingHorizontal: spacing.xs},
    sm: {paddingHorizontal: spacing.sm},
    md: {paddingHorizontal: spacing.md},
    lg: {paddingHorizontal: spacing.lg},
    mlg: {paddingHorizontal: spacing.mlg},
    mmlg: {paddingHorizontal: spacing.mmlg},
    xl: {paddingHorizontal: spacing.xl},
    xxl: {paddingHorizontal: spacing.xxl},
    xxxl: {paddingHorizontal: spacing.xxxl},
  },

  py: {
    zero: {paddingVertical: spacingH.zero},
    xs: {paddingVertical: spacingH.xs},
    sm: {paddingVertical: spacingH.sm},
    md: {paddingVertical: spacingH.md},
    lg: {paddingVertical: spacingH.lg},
    mlg: {paddingVertical: spacingH.mlg},
    mmlg: {paddingVertical: spacingH.mmlg},
    xl: {paddingVertical: spacingH.xl},
    xxl: {paddingVertical: spacingH.xxl},
    xxxl: {paddingVertical: spacingH.xxxl},
    xxxxl: {paddingVertical: spacingH.xxxxl},
  },

  // Margin

  ms: {
    zero: {marginStart: spacing.zero},
    xs: {marginStart: spacing.xs},
    sm: {marginStart: spacing.sm},
    md: {marginStart: spacing.md},
    lg: {marginStart: spacing.lg},
    mlg: {marginStart: spacing.mlg},
    mmlg: {marginStart: spacing.mmlg},
    xl: {marginStart: spacing.xl},
    xxl: {marginStart: spacing.xxl},
    xxxl: {marginStart: spacing.xxxl},
  },

  me: {
    zero: {marginEnd: spacing.zero},
    xs: {marginEnd: spacing.xs},
    sm: {marginEnd: spacing.sm},
    md: {marginEnd: spacing.md},
    lg: {marginEnd: spacing.lg},
    mlg: {marginEnd: spacing.mlg},
    mmlg: {marginEnd: spacing.mmlg},
    xl: {marginEnd: spacing.xl},
    xxl: {marginEnd: spacing.xxl},
    xxxl: {marginEnd: spacing.xxxl},
  },

  mt: {
    zero: {marginTop: spacingH.zero},
    xs: {marginTop: spacingH.xs},
    sm: {marginTop: spacingH.sm},
    md: {marginTop: spacingH.md},
    lg: {marginTop: spacingH.lg},
    mlg: {marginTop: spacingH.mlg},
    mmlg: {marginTop: spacingH.mmlg},
    xl: {marginTop: spacingH.xl},
    xxl: {marginTop: spacingH.xxl},
    xxxl: {marginTop: spacingH.xxxl},
    xxxxl: {marginTop: spacingH.xxxxl},
  },

  mb: {
    zero: {marginBottom: spacingH.zero},
    xs: {marginBottom: spacingH.xs},
    sm: {marginBottom: spacingH.sm},
    md: {marginBottom: spacingH.md},
    lg: {marginBottom: spacingH.lg},
    mlg: {marginBottom: spacingH.mlg},
    mmlg: {marginBottom: spacingH.mmlg},
    xl: {marginBottom: spacingH.xl},
    xxl: {marginBottom: spacingH.xxl},
    xxxl: {marginBottom: spacingH.xxxl},
    xxxxl: {marginBottom: spacingH.xxxxl},
  },

  mx: {
    zero: {marginHorizontal: spacing.zero},
    xs: {marginHorizontal: spacing.xs},
    sm: {marginHorizontal: spacing.sm},
    md: {marginHorizontal: spacing.md},
    lg: {marginHorizontal: spacing.lg},
    mlg: {marginHorizontal: spacing.mlg},
    xl: {marginHorizontal: spacing.xl},
    xxl: {marginHorizontal: spacing.xxl},
  },

  my: {
    zero: {marginVertical: spacingH.zero},
    xs: {marginVertical: spacingH.xs},
    sm: {marginVertical: spacingH.sm},
    md: {marginVertical: spacingH.md},
    lg: {marginVertical: spacingH.lg},
    mlg: {marginVertical: spacingH.mlg},
    mmlg: {marginVertical: spacingH.mmlg},
    xl: {marginVertical: spacingH.xl},
    xxl: {marginVertical: spacingH.xxl},
    xxxl: {marginVertical: spacingH.xxxl},
    xxxxl: {marginVertical: spacingH.xxxxl},
  },

  // Action sheet spacing
  actionSheetSpacing: {
    paddingHorizontal: px(16),
    paddingTop: pxH(32),
    paddingBottom: pxH(42),
  },
  actionSheetContainer: {
    paddingBottom: pxH(32),
    paddingTop: pxH(8),
    paddingHorizontal: px(19),
  },
  actionSheetRadius: {
    borderTopLeftRadius: px(20),
    borderTopRightRadius: px(20),
  },

  // Absolute positioning
  relative: {position: 'relative'} as ViewStyle,
  absolute: {position: 'absolute'} as ViewStyle,
  block: {display: 'flex'},
  fullHeight: {height: '100%'},
  bottom0: {bottom: 0},
  left0: {left: 0},
  top0: {top: 0},
  right0: {right: 0},

  // **** Borders ****
  noBorder: {borderWidth: 0},
  border: {borderWidth: 1},
  grayBorder: {borderColor: '@greyBorder', borderWidth: 1},
  bordered: {borderColor: '@border', borderWidth: 1},
  // horizontalBorder: {borderBottomWidth: 1, borderBottomColor: '@border'},
  horizontalBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '@horizontalBorder',
  },

  borderRounded: {
    bottomLeft: {borderBottomLeftRadius: px(10)},
    topLeft: {borderTopLeftRadius: px(10)},
    bottomRight: {borderBottomRightRadius: px(10)},
    topRight: {borderTopRightRadius: px(10)},
  },

  topRounded: {borderTopStartRadius: px(10), borderTopEndRadius: px(10)},
  rounded: {borderRadius: px(10)},
  scrollViewBottomSpacing: {paddingBottom: pxH(10)},
  scrollViewhorizontalSpacing: {paddingHorizontal: px(10)},
  cardRounded: {borderRadius: px(3)},

  // font
  highLineHeight: {lineHeight: px(10)},
};

export default layouts;
