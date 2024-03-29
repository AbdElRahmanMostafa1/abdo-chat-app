import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import MainHeader from '@src/components/shared/mainHeader';
import {IMAGES} from '@src/assets/images';

const Home = () => {
  return (
    <MainLayout header={<MainHeader />}>
      <Image source={IMAGES.SOON} resizeMode="contain" style={styles.img} />

      <Text style={styles.title}>{'Main Categories'}</Text>

      <Text style={styles.title}>{'Main Stores'}</Text>
    </MainLayout>
  );
};

export default Home;
