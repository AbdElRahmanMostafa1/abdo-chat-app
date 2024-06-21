import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import MainHeader from '@src/components/shared/mainHeader';
import {IMAGES} from '@src/assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@src/navigation';

const Home = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Signup');
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <MainLayout header={<MainHeader />}>
      <Image source={IMAGES.SOON} resizeMode="contain" style={styles.img} />

      <Text style={styles.title}>{'Main Categories'}</Text>

      <Text style={styles.title}>{'Main Stores'}</Text>

      <TouchableOpacity onPress={logout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default Home;
