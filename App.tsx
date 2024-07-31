/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './src/screens/Explore';
import Repositories from './src/screens/Repositories';
import styles from './src/styles.theme';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.logoBar}>
        <Image
          style={{width: 112, objectFit: 'contain'}}
          source={require('./src/assets/images/logo.png')}
        />
      </View>
      <NavigationContainer style={{flex: 1}}>
        <Tab.Navigator>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Repositories" component={Repositories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
