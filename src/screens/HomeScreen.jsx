import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './Explore';
import Repositories from './Repositories';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  return (
    <View style={styles.main}>
      <View style={styles.logoBar}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: theme.primary_background,
          }}>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Repositories" component={Repositories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default HomeScreen;
