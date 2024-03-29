import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {TabsParamList} from '@src/models';
import Home from '@src/screens/bottomTabs/home';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {COLORS} from '@src/theme';
import {px} from '@src/utils';
import Cart from '@src/screens/bottomTabs/cart';
import WhiteList from '@src/screens/bottomTabs/whiteList';
import Profile from '@src/screens/bottomTabs/profile';
import layouts from '@src/theme/layout';
import HomeSvg from '@src/assets/svg/homeSvg';
import WhiteListSvg from '@src/assets/svg/whiteListSvg';
import CartSvg from '@src/assets/svg/cartSvg';
import ProfileSvg from '@src/assets/svg/profileSvg';

const Tab = createBottomTabNavigator<TabsParamList>();
export type ProfileStackProps = StackNavigationProp<TabsParamList>;
const BottomStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.DARK_GRAY,
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({focused}) => {
            const routeName = route.name;
            return (
              <View style={styles.card}>
                {routeName === 'Home' ? (
                  <HomeSvg
                    color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                  />
                ) : routeName === 'WhiteList' ? (
                  <WhiteListSvg
                    color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                  />
                ) : routeName === 'Cart' ? (
                  <CartSvg
                    color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                  />
                ) : (
                  <ProfileSvg
                    color={focused ? COLORS.PRIMARY : COLORS.DARK_GRAY}
                  />
                )}
              </View>
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="WhiteList" component={WhiteList} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <SafeAreaView
        style={{
          backgroundColor: COLORS.WHITE,
        }}
      />
    </>
  );
};

export default BottomStack;

export const styles = StyleSheet.create({
  tabBarStyle: {
    ...layouts.justifyBetween,
    ...layouts.yCentered,
    shadowOffset: {
      width: px(0),
      height: px(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 0.5,
    elevation: 10,
    backgroundColor: COLORS.WHITE,
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: px(79),
    paddingTop: px(20),
    paddingBottom: px(10),
    paddingHorizontal: px(10),
    borderTopWidth: 0.5,
    borderTopColor: COLORS.GRAY_LIGHT,
  },
  card: {
    ...layouts.allCentered,
    paddingVertical: px(11),
    paddingHorizontal: px(9),
    gap: px(2),
    borderRadius: px(4),
  },
});
