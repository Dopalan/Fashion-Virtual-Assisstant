// import React from 'react';
// import { View } from 'react-native';
// import { TextInput, Button, Text } from 'react-native-paper';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/AppNavigator';

// type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;

// export default function ForgotPasswordScreen({ navigation }: Props) {
//   return (
//     <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
//       <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
//         Create Account
//       </Text>
//       <TextInput label="Email" mode="outlined" style={{ marginBottom: 10 }} />
//       <TextInput label="Password" secureTextEntry mode="outlined" style={{ marginBottom: 10 }} />
//       <TextInput label="Confirm Password" secureTextEntry mode="outlined" style={{ marginBottom: 20 }} />
//       <Button mode="contained" onPress={() => console.log('ForgotPassword')}>
//         Sign Up
//       </Button>
//       <Button onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
//         Already have an account? Login
//       </Button>
//     </View>
//   );
// }
