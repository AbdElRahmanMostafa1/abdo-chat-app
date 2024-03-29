import {IMAGES} from '@src/assets/images';
import Cart from '@src/assets/svg/cart';
import Filter from '@src/assets/svg/filter';
import Heart from '@src/assets/svg/heart';
import Search from '@src/assets/svg/search';
import {COLORS} from '@src/theme';
import layouts from '@src/theme/layout';
import {fontSize, px, pxH} from '@src/utils';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={IMAGES.LOGO} resizeMode="contain" style={styles.logo} />
        <View style={styles._row}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                marginEnd: px(15),
              },
            ]}
            activeOpacity={0.8}>
            <Heart />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} activeOpacity={0.8}>
            <Cart />
            <View style={styles.cartNumber}>
              <Text style={styles.number}>{'1'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.viewInput}>
          <Search />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.BLACK}
            placeholder="Search Anything"
          />
        </View>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: COLORS.PRIMARY,
            },
          ]}
          activeOpacity={0.8}>
          <Filter />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: px(29),
    backgroundColor: COLORS.WHITE,
    paddingVertical: pxH(12),
  },
  row: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    marginVertical: px(5),
  },
  _row: {
    ...layouts.row,
    ...layouts.yCentered,
    ...layouts.xCentered,
  },
  logo: {
    width: pxH(183),
    height: pxH(60),
  },
  btn: {
    ...layouts.px.lg,
    ...layouts.py.lg,
    backgroundColor: COLORS.PINK,
    borderRadius: px(6),
  },
  cartNumber: {
    backgroundColor: COLORS.MOVE,
    ...layouts.px.sm,
    ...layouts.py.sm,
    ...layouts.allCentered,
    borderRadius: px(15),
    position: 'absolute',
    width: px(20),
    height: px(20),
    top: pxH(-10),
    left: px(30),
  },
  number: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: fontSize(12),
  },
  viewInput: {
    ...layouts.row,
    ...layouts.yCentered,
    backgroundColor: COLORS.GRAY,
    borderRadius: px(25),
    width: px(268),
    paddingHorizontal: px(14),
  },
  input: {
    paddingLeft: px(14),
    height: pxH(50),
  },
});
