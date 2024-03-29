import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../models';
import {StackNavigationProp} from '@react-navigation/stack';
import LandingPage from '@src/screens/intro/landingPage';
import BottomStack from './bottomTabStack';
import Login from '@src/screens/auth/login';
import Chat from '@src/screens/chat';
const MainStack = createNativeStackNavigator<MainStackParamList>();
export type RootStackNavigationProp = StackNavigationProp<MainStackParamList>;

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="LandingPage" component={LandingPage} />
      <MainStack.Screen name="BottomStack" component={BottomStack} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Chat" component={Chat} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
