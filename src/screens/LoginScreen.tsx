import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { authStyles as styles } from '../styles/authStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>Login Here</Text>
        {/* <Text variant="titleMedium" style={styles.subtitle}>
            {"Welcome back\nyou’ve been missed!"}
        </Text> */}
        <Text variant="titleMedium" style={styles.subtitle}>
            {"Welcome back you’ve been missed!"}
        </Text>

      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        theme={{ roundness: 12 }} 
       />


      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        theme={{ roundness: 12 }}
      />



       {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>  */}

      <Button mode="contained" onPress={() => navigation.navigate('Home')} style={styles.loginButton}>
        Sign In
      </Button>
      
      <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
        Don't have an account? <Text style={styles.linkHighlight}>Sign Up</Text>
      </Text>

    </View>
  );
}


