import React from 'react';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons/faLightbulb';
import {faMoon} from '@fortawesome/free-regular-svg-icons/faMoon';
import NavigationComponent from '../components/NavigationContainer';

const logo = require('../assets/images/logo.png');
const logoDark = require('../assets/images/logo-dark.png');

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
    <SafeAreaView style={[styles.main, theme.primary_background]}>
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
      <NavigationComponent />
    </SafeAreaView>
  );
};
export default HomeScreen;
