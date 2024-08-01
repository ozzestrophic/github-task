import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';

const Explore = () => {
  return (
    <View style={styles.tabComponent}>
      <Text style={styles.title}>Explore popular</Text>
      <View style={styles.reposContainer}>
        <TrendingRepoCard />
        <TrendingRepoCard />
        <TrendingRepoCard />
        <TrendingRepoCard />
      </View>
    </View>
  );
};

export default Explore;
