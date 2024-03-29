import {IBabyCard} from '@src/models';
import {COLORS, FONTS} from '@src/theme';
import layouts from '@src/theme/layout';
import {fontSize, px, pxH} from '@src/utils';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface props {
  item: IBabyCard;
  index: number;
}

const BabyCard = (props: props) => {
  const {item, index} = props;
  return (
    <View style={styles.card}>
      <Image source={item?.image} resizeMode="contain" style={styles.img} />
      <Text
        style={[
          styles.title,
          {
            color: index % 2 == 0 ? COLORS.PRIMARY : COLORS.PINK,
          },
        ]}>
        {item?.name?.toUpperCase()}
      </Text>
    </View>
  );
};

export default BabyCard;

const styles = StyleSheet.create({
  card: {
    ...layouts.px.lg,
    ...layouts.py.xl,
    ...layouts.allCentered,
    width: px(150),
    margin: px(5),
    shadowOffset: {
      width: px(0),
      height: px(0.5),
    },
    shadowOpacity: 0.4,
    shadowRadius: 0.9,
    backgroundColor: COLORS.WHITE,
    borderRadius: px(30),
    ...layouts.px.xxl,
    ...layouts.py.xxl,
    elevation: 3,
  },
  img: {
    width: px(130),
    height: pxH(165),
    borderRadius: px(10),
  },
  title: {
    fontSize: fontSize(18),
    marginTop: px(10),
    fontFamily: FONTS.BOLD,
  },
});
