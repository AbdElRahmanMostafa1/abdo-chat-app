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

const CategoryCard = (props: props) => {
  const {item, index} = props;
  return (
    <View style={styles.card}>
      <Image source={item?.image} resizeMode="contain" style={styles.img} />
      <Text style={styles.title}>{item?.name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    ...layouts.allCentered,
    ...layouts.pe.xl,
    ...layouts.pt.xl,
  },
  img: {
    width: px(70),
    height: px(70),
    borderRadius: px(90),
  },
  title: {
    fontSize: fontSize(16),
    marginTop: px(10),
    fontFamily: FONTS.REGULAR,
    color: COLORS.DARK_GRAY,
  },
});
