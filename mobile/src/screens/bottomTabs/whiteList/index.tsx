import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import MainHeader from '@src/components/shared/mainHeader';

const WhiteList = () => {
  return (
    <MainLayout header={<MainHeader />}>
      <Text>{''}</Text>
    </MainLayout>
  );
};

export default WhiteList;
