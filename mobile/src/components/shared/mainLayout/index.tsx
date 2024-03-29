import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from './style';
import {IMainLayoutProps} from '@src/models';

const MainLayout = ({
  containerVariant = 'container',
  children,
  header,
  footer,
  isHeaderFixed = true,
  scrollEnabled = true,
  onScroll = () => {},
}: IMainLayoutProps) => {
  const screenName = useRoute().name;

  return (
    <>
      <SafeAreaView style={styles({screenName}).screen} />
      {isHeaderFixed && header && header}
      <View style={styles({containerVariant}).container}>
        <ScrollView
          nestedScrollEnabled
          scrollEnabled={scrollEnabled}
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles({containerVariant}).body}>
          {!isHeaderFixed && header && header}

          <View style={{flex: 1}}>{children}</View>
          {footer && footer}
        </ScrollView>
      </View>
    </>
  );
};

export default MainLayout;
