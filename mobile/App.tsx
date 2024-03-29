import MainNavigator from '@src/navigation/mainStack';
import {COLORS} from '@src/theme';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, LogBox, Alert} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  LogBox.ignoreAllLogs(true);
  Orientation.lockToPortrait();

  if (!__DEV__) {
    console.log = () => {};
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    // <Provider store={store}>
    //   <SafeAreaProvider>
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.WHITE} />
      <SafeAreaView mode="padding" style={styles.container}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
    //   </SafeAreaProvider>
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
