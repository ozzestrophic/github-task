import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';

const Explore = () => {
  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Explore popular</Text>
      <View style={styles.reposContainer}>
        <TrendingRepoCard />
        <TrendingRepoCard />
        <TrendingRepoCard />
        <TrendingRepoCard />
      </View>
    </ScrollView>
  );
};

export default Explore;
