import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './src/screens/Explore';
import Repositories from './src/screens/Repositories';
import styles from './src/styles/theme';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
