import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import styles from '../styles/theme';
import {COLORS} from '../utils/style';

const Repositories = () => {
  // const [colorScheme, setColorScheme] = useState('light');
  const colorScheme = useColorScheme();
  const colors = COLORS[colorScheme ?? 'light'];
  return (
    <View
      style={[
        styles.tabComponent,
        {backgroundColor: colors.primary_background},
      ]}>
      <Text>Repositoris!</Text>
    </View>
  );
};

export default Repositories;
