import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import MainHeader from '@src/components/shared/mainHeader';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackNavigationProp} from '@src/navigation';
import {StackActions, useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '@src/models';

const Profile = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigation = useNavigation<MainStackParamList>();

  const getAllUsers = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const {data} = await axios.get('http://192.168.1.4:5000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({data});
      setAllUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const renderUserItem = ({
    _id,
    userName,
    email,
  }: {
    _id: string;
    userName: string;
    email: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat', {
            _id,
            userName,
            email,
          });
        }}>
        <Text>{userName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <MainLayout>
      <Text>{''}</Text>
      <FlatList data={allUsers} renderItem={({item}) => renderUserItem(item)} />
    </MainLayout>
  );
};

export default Profile;
