import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from '../screens/Explore';
import Repositories from '../screens/Repositories';
import {useSelector} from 'react-redux';
import {darkColors, lightColors} from '../styles/theme';

const Tab = createMaterialTopTabNavigator();

const NavigationComponent = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  return (
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
  );
};
export default NavigationComponent;
