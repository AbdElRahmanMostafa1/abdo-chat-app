import {StyleSheet} from 'react-native';
import {TContainerVariant, TFooterDirection} from '@src/models';
import {px, pxH} from '@src/utils';
import layouts from '@src/theme/layout';
import {COLORS} from '@src/theme';

export const styles = ({
  containerVariant = 'container',
  footerDirection = 'col',
  screenName,
}: {
  containerVariant?: TContainerVariant;
  footerDirection?: TFooterDirection;
  screenName?: string;
}) =>
  StyleSheet.create({
    screen: {
      backgroundColor: COLORS.WHITE,
      width: '100%',
    },
    container: {
      flex: 1,
      ...containerVariantStyles[containerVariant],
      backgroundColor: COLORS.WHITE,
    },
    body: {
      paddingBottom: px(40),
      flexGrow: 1,
      marginTop: pxH(25),
      ...layouts.justifyBetween,
    },
    footer: {
      gap: px(8),
      flexDirection: footerDirection === 'col' ? 'column' : 'row',
    },
    btn: {
      flex: footerDirection === 'row' ? 1 : undefined,
    },
    textBtn: {
      paddingVertical: px(7),
      paddingHorizontal: px(14),
      marginVertical: 0,
      marginHorizontal: 0,
    },
  });

// in case we need to add any special style for the container plz update the styles here
const containerVariantStyles = {
  container: {
    ...layouts.px.xxl,
  },
  stretched: {
    ...layouts.px.xl,
  },
  none: {
    ...layouts.px.zero,
  },
};
