import React, {useEffect} from 'react';
import {ScrollView, Text, View, useColorScheme} from 'react-native';
import styles from '../styles/theme';
import {COLORS} from '../utils/style';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import TrendingRepoCard from '../components/TrendingRepoCard';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  useEffect(() => {
    store.dispatch(fetchRepos());
  }, []);
  const fetchedRepos = useSelector(selectRepositories);
  const reposFetchState = useSelector(state => state.repositories.loading);
  const renderedListRepos = fetchedRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));
  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Repositories</Text>
      {reposFetchState && (
        <View>
          <Text style={{textAlign: 'center', padding: 10}}>Loading...</Text>
        </View>
      )}
      <View style={styles.reposContainer}>{renderedListRepos}</View>
    </ScrollView>
  );
};

export default Repositories;
