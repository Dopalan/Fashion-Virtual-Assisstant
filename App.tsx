import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';


const pinkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EC4899', // hồng đậm (primary)
    onPrimary: '#fff',
    secondary: '#FBCFE8', // hồng pastel
    background: '#FFF1F2', // nền hồng nhạt
    surface: '#FCE7F3',
    onSurface: '#3F3F46',
    outline: '#E879F9',
  },
};
export default function App() {
  return (
    <PaperProvider theme={pinkTheme}> 
      <AppNavigator />

    </PaperProvider>
  );
}


