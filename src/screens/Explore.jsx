import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {useSelector} from 'react-redux';
import store from '../redux/store';
import {fetchExploreRepos} from '../redux/exploreSlice';
import DropDownPicker from 'react-native-dropdown-picker';

const selectExploreRepos = state => state.explore.exploreRepos;
DropDownPicker.setMode('BADGE');

const Explore = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([
    {label: 'Top 10', value: 10},
    {label: 'Top 50', value: 50},
    {label: 'Top 100', value: 100},
  ]);
  useEffect(() => {
    store.dispatch(fetchExploreRepos(limit));
  }, [limit]);
  const exploreRepos = useSelector(selectExploreRepos);
  const reposFetchState = useSelector(state => state.explore.loading);
  const renderedListRepos = exploreRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));

  return (
    <ScrollView style={[styles.tabComponent, theme.secondary_background]}>
      <Text style={[styles.title, theme.secondary_text]}>Explore popular</Text>
      {reposFetchState && (
        <View>
          <Text style={{textAlign: 'center', padding: 10}}>Loading...</Text>
        </View>
      )}
      <DropDownPicker
        dropDownContainerStyle={[
          styles.dropDownPickerContainer,
          theme.hideBorder,
          theme.primary_background,
          theme.secondary_text,
        ]}
        style={[
          styles.dropDownPicker,
          theme.hideBorder,
          theme.primary_background,
          theme.secondary_text,
        ]}
        textStyle={theme.secondary_text}
        open={open}
        value={limit}
        items={items}
        setOpen={setOpen}
        setValue={setLimit}
        setItems={setItems}
      />
      <View style={styles.reposContainer}>{renderedListRepos}</View>
    </ScrollView>
  );
};

export default Explore;
