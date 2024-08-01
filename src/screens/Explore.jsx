import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/theme';
import RepoCard from '../components/RepoCard';

const Explore = () => {
  return (
    <View style={styles.tabComponent}>
      <Text style={styles.title}>Explore popular</Text>
      <RepoCard />
    </View>
  );
};

export default Explore;
