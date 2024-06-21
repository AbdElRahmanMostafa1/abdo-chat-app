import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import MainLayout from '@src/components/shared/mainLayout';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation<RootStackNavigationProp>();

  const changeInputHandler = (key: string, value: string) => {
    setForm(prevValue => ({...prevValue, [key]: value}));
  };

  const loginHandler = async () => {
    try {
      const {data} = await axios.post(
        'http://192.168.1.225:5000/api/users/login',
        {
          ...form,
        },
      );
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

      <TouchableOpacity onPress={loginHandler}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>GO TO Sign up</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default Login;
