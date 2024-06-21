import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import axios from 'axios';
import {StackActions, useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    userName: '',
  });
  const [deviceToken, setDeviceToken] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();

  const changeInputHandler = (key: string, value: string) => {
    setForm(prevValue => ({...prevValue, [key]: value}));
  };

  console.log({deviceToken});

  const signUpHandler = async () => {
    if (!deviceToken) {
      // Toast.show('Something went wrong!', {
      //   type: 'danger',
      //   placement: 'top',
      // });
      return;
    }
    try {
      const {data} = await axios.post('http://192.168.1.225:5000/api/users/', {
        ...form,
        deviceToken,
      });
      if (data) {
        console.log({data});
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('userId', data._id);
        navigation.navigate('BottomStack', {
          screen: 'Home',
        });
      }
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    const getDeviceToken = async () => {
      try {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();

        setDeviceToken(token);
      } catch (error) {}
    };
    getDeviceToken();
  }, []);

  return (
    <MainLayout>
      <Text>Email</Text>
      <TextInput
        value={form.email}
        onChangeText={value => changeInputHandler('email', value)}
      />

      <Text>Password</Text>
      <TextInput
        value={form.password}
        onChangeText={value => changeInputHandler('password', value)}
      />
      <Text>userName</Text>
      <TextInput
        value={form.userName}
        onChangeText={value => changeInputHandler('userName', value)}
      />

      <TouchableOpacity onPress={signUpHandler}>
        <Text>Register</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default Register;
