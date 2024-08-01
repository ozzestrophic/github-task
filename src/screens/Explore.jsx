import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {useSelector} from 'react-redux';

const selectExploreRepos = state => state.explore;

const Explore = () => {
  const exploreRepos = useSelector(selectExploreRepos);
  const renderedListRepos = exploreRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));
  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Explore popular</Text>
      <View style={styles.reposContainer}>{renderedListRepos}</View>
    </ScrollView>
  );
};

export default Explore;
