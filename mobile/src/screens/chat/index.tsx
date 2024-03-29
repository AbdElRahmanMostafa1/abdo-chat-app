import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {useRoute, useIsFocused} from '@react-navigation/native';
import MainLayout from '@src/components/shared/mainLayout';
import socket from '@src/services/socket';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = () => {
  const route = useRoute();
  const {_id: receiverId, email, userName} = route?.params;
  const isFocused = useIsFocused();

  const [textMessage, setTextMessage] = useState('');
  const [currentUserId, setCurrentUserId] = useState<string | null>('');
  const [messages, setMessages] = useState<any[]>([]);

  const changeTextMessageHandler = (value: string) => {
    setTextMessage(value);
  };

  const getUserId = async () => {
    const id = await AsyncStorage.getItem('userId');
    setCurrentUserId(id);
  };

  const sendTextMessageHandler = () => {
    if (textMessage) {
      console.log(currentUserId, receiverId, textMessage);

      socket.emit('chat message', {
        senderId: currentUserId,
        receiverId,
        textMessage,
      });
      setMessages(prevMessages => [
        ...prevMessages,
        {
          senderId: currentUserId,
          receiverId,
          textMessage,
        },
      ]);
      setTextMessage('');
    }
  };

  console.log({messages});

  useEffect(() => {
    getUserId();
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('chat message', data => {
      console.log('Received message:', data);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [isFocused]);

  return (
    <MainLayout>
      <Text>{userName}</Text>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={messages}
          renderItem={({item}) => {
            console.log({item});

            return (
              <Text
                style={{
                  alignSelf:
                    item.senderId === currentUserId ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                }}>
                {item.textMessage}
              </Text>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
          }}
          value={textMessage}
          onChangeText={changeTextMessageHandler}
        />
        <TouchableOpacity onPress={sendTextMessageHandler}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default Chat;
