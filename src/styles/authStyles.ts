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
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 60,
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 3,
    borderRadius: 4,
    backgroundColor: '#C2185B',
  },
  dotSelected: {
    backgroundColor: '#e91e63',
  },
  dotUnselected: {
    backgroundColor: '#ccc',
  },
  nextButton: {
    marginHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#e91e63',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  doneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
});
