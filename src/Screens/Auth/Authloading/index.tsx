import React, { useEffect } from 'react';
import { Platform, Text, View, Image, StatusBar, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { allImages } from '../../../Constants/Images';
import { appColors } from '../../../Constants/Colors';

interface AuthloadingProps {
  navigation: any;
}

const Authloading: React.FC<AuthloadingProps> = (props) => {
  useEffect(() => {
    navigateToNext();
  }, []);

  const navigateToNext = async () => {
    setTimeout(async () => {
      props.navigation.navigate('Intro');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={appColors.BUBBLE_GUM}
      />
      <Image source={allImages.logo} style={styles.image} />
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="small" color={appColors.BUBBLE_GUM} />
      </View>
    </View>
  );
};

export default Authloading;