import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './Explore';
import Repositories from './Repositories';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useSelector} from 'react-redux';
const logo = require('../assets/images/logo.png');
const logoDark = require('../assets/images/logo-dark.png');

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  return (
    <View style={[styles.main, theme.primary_background]}>
      <View style={styles.logoBar}>
        <Image
          style={styles.logoImage}
          source={colorMode === 'light' ? logo : logoDark}
        />
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: [theme.primary_background],
            tabBarContentContainerStyle: {padding: 10},
            tabBarGap: 16,
            tabBarItemStyle: {width: 'auto'},
            tabBarLabelStyle: [
              theme.tertiary_text,
              {fontSize: 14, fontWeight: '500', textTransform: 'capitalize'},
            ],
            tabBarIndicatorStyle: {
              backgroundColor: theme.accent_color.color,
              marginLeft: 10,
            },
            tabBarActiveTintColor: theme.primary_text.color,
          }}>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Repositories" component={Repositories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default HomeScreen;
