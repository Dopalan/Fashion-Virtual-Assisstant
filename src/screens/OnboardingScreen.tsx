import React from 'react';
import { Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation }: any) {
  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Login');
  };

  return (
    <Onboarding
      onSkip={handleFinish}
      onDone={handleFinish}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/wardrobe.png')} style={{ width: 200, height: 200 }} />,
          title: 'Welcome!',
          subtitle: 'Start managing your wardrobe now.',
        },
      ]}
    />
  );
}
