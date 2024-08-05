import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './Explore';
import Repositories from './Repositories';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons/faLightbulb';
import {faMoon} from '@fortawesome/free-regular-svg-icons/faMoon';

const logo = require('../assets/images/logo.png');
const logoDark = require('../assets/images/logo-dark.png');
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const dispatch = useDispatch();
  // const [mode, setMode] = useState(colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  const toggleMode = () =>
    dispatch({
      type: 'SET_COLOR_MODE',
      payload: colorMode === 'light' ? 'dark' : 'light',
    });
  return (
    <View style={[styles.main, theme.primary_background]}>
      <View style={styles.logoBar}>
        <Image
          style={styles.logoImage}
          source={colorMode === 'light' ? logo : logoDark}
        />
        <Pressable
          onPress={() => {
            toggleMode();
          }}>
          <FontAwesomeIcon
            icon={colorMode === 'dark' ? faLightbulb : faMoon}
            style={[theme.tertiary_text, styles.logoIcon]}
            size={24}
          />
        </Pressable>
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
