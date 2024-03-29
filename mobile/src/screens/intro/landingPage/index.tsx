import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IMAGES} from '@src/assets/images';
import layouts from '@src/theme/layout';
import {px} from '@src/utils';
import {StackActions, useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@src/navigation';
import {COLORS} from '@src/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LandingPage = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsAuthUser = async () => {
      const userId = await AsyncStorage.getItem('userId');
      setIsAuthUser(!!userId);
    };

    const redirectToScreenHandler = () => {
      if (isAuthUser === null) return; // Waiting for auth check to complete
      if (isAuthUser) {
        navigation.replace('BottomStack', {
          screen: 'Home',
        });
      } else {
        navigation.replace('Login');
      }
    };

    const timeout = setTimeout(() => {
      redirectToScreenHandler();
    }, 3000);

    checkIsAuthUser().then(() => {
      clearTimeout(timeout); // Clear the timeout if the authentication check completes before 5 minutes
      redirectToScreenHandler();
    });

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [isAuthUser, navigation]);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    ...layouts.allCentered,
    ...layouts.flexed,
    backgroundColor: COLORS.WHITE,
  },
  logo: {
    width: px(200),
    height: px(200),
  },
});
