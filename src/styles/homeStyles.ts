import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
   weatherContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 24,
   },
   sectionTitle: {
     fontWeight: 'bold',
     fontSize: 18,
     marginBottom: 12,
   },
   cardRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     gap: 8,
   },
   productCard: {
     flex: 1,
     margin: 4,
   },
 });