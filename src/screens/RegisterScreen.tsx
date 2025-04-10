// src/screens/RegisterScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { authStyles as styles } from '../styles/authStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>Create Account</Text>
        <Text variant="titleMedium" style={styles.subtitle}>Creat a acount for you wardrobe</Text>
      
        <TextInput label="Email" mode="outlined" style={styles.input} theme={{ roundness: 12 }}/>
        <TextInput label="Password" secureTextEntry mode="outlined" style={styles.input} theme={{ roundness: 12 }}/>
        <TextInput label="Confirm Password" secureTextEntry mode="outlined" style={styles.input} theme={{ roundness: 12 }}/>
        <Button mode="contained" onPress={() => console.log('Register')}>
            Sign Up
        </Button>


        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          Already have an account? <Text style={styles.linkHighlight}>Login</Text>
        </Text>
    </View>
  );
}



