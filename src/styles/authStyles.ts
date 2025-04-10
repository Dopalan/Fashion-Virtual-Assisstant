import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'hotpink',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  forgotText: {
    color: 'skyblue',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    marginBottom: 10,
  },
  linkText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#6B7280', // xám nhạt
  },
  linkHighlight: {
    color: '#EC4899', // hồng
    fontWeight: 'bold',
  },
  
});
