import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Onboarding, { DotProps } from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { authStyles as styles } from '../styles/authStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

// Custom Dot Component (chủ đề màu hồng)
const CustomDot = ({ selected }: DotProps) => (
  <View
    style={[
      styles.dot,
      { backgroundColor: '#C2185B' },
      selected && { width: 12, height: 12, borderRadius: 6 },
    ]}
  />
);



const CustomNextButton = (props: any) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.buttonContainer, { backgroundColor: '#C2185B' }]}
  >
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const CustomSkipButton = (props: any) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.buttonContainer, { backgroundColor: '#C2185B' }]}
  >
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
);

interface CustomDoneButtonProps {
  onPress: () => void;
  resetOnboarding: () => void;
}
const CustomDoneButton = (props: CustomDoneButtonProps) => {
  return (
    <View style={styles.doneContainer}>

      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.buttonContainer, { backgroundColor: '#C2185B' }]}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};



export default function OnboardingScreen({ navigation }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages = [
    {
      backgroundColor: '#ffffff',
      image: (
        <Image
          source={require('../../assets/onboarding1.png')}
          style={styles.image}
        />
      ),
      title: 'Welcome to Your Wardrobe',
      subtitle:
        'Creating your own wardrobe has not been easier with our virtual storage system.',
    },
    {
      backgroundColor: '#ffffff',
      image: (
        <Image
          source={require('../../assets/onboarding2.png')}
          style={styles.image}
        />
      ),
      title: 'Don’t know what to wear?',
      subtitle: 'Professional AI stylist is here to help by all its best.',
    },
    {
      backgroundColor: '#ffffff',
      image: (
        <Image
          source={require('../../assets/onboarding3.png')}
          style={styles.image}
        />
      ),
      title: 'Just a click and you can catch up with the hottest trends in fashion.',
      subtitle: '',
    },
    {
      backgroundColor: '#ffffff',
      image: (
        <Image
          source={require('../../assets/onboarding4.png')}
          style={styles.image}
        />
      ),
      title:
        'Your time is valuable, don’t waste it on traditional ways of trying outfits.',
      subtitle: '',
    },
  ];

  const handleFinish = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.replace('Login');
    } catch (error) {
      console.error('Error setting onboarding flag:', error);
    }
  };

  const resetOnboarding = () => {
    setCurrentPage(0);
  };

  return (
    <Onboarding
      onSkip={handleFinish}
      onDone={handleFinish}
      NextButtonComponent={CustomNextButton}
      SkipButtonComponent={CustomSkipButton}
      DoneButtonComponent={() => (
        <CustomDoneButton
          onPress={handleFinish}
          resetOnboarding={resetOnboarding}
        />
      )}
      DotComponent={CustomDot}
      pages={pages}
    />
  );
}


const buttonStyles = StyleSheet.create({

});