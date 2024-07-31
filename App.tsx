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

const Explore = () => {
  return (
    <View style={styles.tabComponent}>
      <Text>Explore!</Text>
    </View>
  );
};

const Repositories = () => {
  return (
    <View style={styles.tabComponent}>
      <Text>Repositoris!</Text>
    </View>
  );
};

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

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 44,
    flex: 1,
  },
  logoBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  tabComponent: {
    backgroundColor: '#FAFCFE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
