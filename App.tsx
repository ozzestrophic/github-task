/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, ScrollView, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './src/screens/Explore';
import Repositories from './src/screens/Repositories';
import styles from './src/styles/theme';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.logoBar}>
        <Image
          style={styles.logoImage}
          source={require('./src/assets/images/logo.png')}
        />
      </View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Repositories" component={Repositories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
