import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {useSelector} from 'react-redux';
import store from '../redux/store';
import {fetchExploreRepos} from '../redux/exploreSlice';

const selectExploreRepos = state => state.explore.exploreRepos;

const Explore = () => {
  useEffect(() => {
    store.dispatch(fetchExploreRepos());
  }, []);
  const exploreRepos = useSelector(selectExploreRepos);
  const reposFetchState = useSelector(state => state.explore.loading);
  const renderedListRepos = exploreRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));

  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Explore popular</Text>
      {reposFetchState && (
        <View>
          <Text style={{textAlign: 'center', padding: 10}}>Loading...</Text>
        </View>
      )}
      <View style={styles.reposContainer}>{renderedListRepos}</View>
    </ScrollView>
  );
};

export default Explore;
