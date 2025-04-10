 import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
 import React from 'react';
 import { View, ScrollView, Image, StyleSheet } from 'react-native';
 import { Avatar, Card, Text, Appbar, BottomNavigation } from 'react-native-paper';
 import { homeStyles as styles } from '../styles/homeStyles';
 import 'react-native-vector-icons/MaterialCommunityIcons';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

 type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


 const weatherIcon = require('../../assets/clound-sun.png'); 

 const products = [
  {
     title: 'Faker',
     image: 'https:example.com/faker-jacket.png',
   },
   {
     title: 'T1 Uniform Faker',
     label: 'XXL',
     image: 'https:example.com/faker-shirt.png',
   },
 ];

 const HomeScreen: React.FC<Props> = ({ navigation }) => {
   const [index, setIndex] = React.useState(0);
   const routes = [
    { key: 'store', title: 'Store' },
    { key: 'home', title: 'Home' },
    { key: 'cart', title: 'Cart' },
  ];

   const renderScene = BottomNavigation.SceneMap({
     store: () => <View />,
     home: () => <HomeContent />,
     cart: () => <View />,
   });

   return (
     <>
       <Appbar.Header style={{ backgroundColor: '#C2185B' }}>
         <Avatar.Text size={36} label="K" style={{ backgroundColor: 'white', marginLeft: 10 }} />
       </Appbar.Header>
       <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#C2185B' }}
            activeColor="white"
            inactiveColor="#eee"
            renderIcon={({ route, color }) => {
                let iconName = '';
                switch (route.key) {
                case 'store':
                    iconName = 'store';
                    break;
                case 'home':
                    iconName = 'home';
                    break;
                case 'cart':
                    iconName = 'cart-outline';
                    break;
                }
                return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
            }}
            />
     </>
   );
 };

 const HomeContent = () => {
   return (
     <ScrollView style={{ flex: 1, padding: 16 }}>
       <View style={styles.weatherContainer}>
         <Image source={weatherIcon} style={{ width: 50, height: 50 }} />
         <View style={{ marginLeft: 12 }}>
           <Text>34 ℃</Text>
           <Text>Humidity 53%</Text>
           <Text>Ho Chi Minh</Text>
         </View>
       </View>

       <Text style={styles.sectionTitle}>Shopping suggestion</Text>
       <View style={styles.cardRow}>
         {products.map((product, index) => (
           <Card key={index} style={styles.productCard}>
             <Card.Cover source={{ uri: product.image }} />
             <Card.Content>
               <Text variant="titleMedium">{product.title}</Text>
               {product.label && (
                 <>
                   <Text>Label:</Text>
                   <Text>Size: {product.label}</Text>
                 </>
               )}
             </Card.Content>
           </Card>
         ))}
       </View>
     </ScrollView>
   );
 };



 export default HomeScreen;
