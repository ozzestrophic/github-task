import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {useSelector} from 'react-redux';
import store from '../redux/store';
import {fetchExploreRepos} from '../redux/exploreSlice';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import SelectModal from '../components/SelectModal';
import SelectForm from '../components/SelectForm';

const selectExploreRepos = state => state.explore.exploreRepos;

const Explore = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const items = [
    {label: 'Top 10', value: 10},
    {label: 'Top 50', value: 50},
    {label: 'Top 100', value: 100},
  ];
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

      <SelectModal
        title={'View Limit'}
        modalVisible={open}
        setModalVisible={setOpen}>
        <SelectForm
          setModalVisible={setOpen}
          setSelectedOption={setLimit}
          selectedOption={limit}
          passedOptions={items}
          hideSelect={true}
        />
      </SelectModal>
      <Pressable
        style={[
          styles.modalButton,
          theme.primary_background,
          theme.secondary_border,
        ]}
        onPress={() => setOpen(true)}>
        <Text style={[styles.buttonLabel, theme.tertiary_text]}>View: </Text>
        <Text style={theme.secondary_text}>{'Top ' + limit}</Text>
        <FontAwesomeIcon
          icon={faChevronDown}
          size={12}
          style={[styles.marginLeftAuto, theme.secondary_text]}
        />
      </Pressable>
      {reposFetchState && (
        <View>
          <Text style={[styles.repoFetchIndicator, theme.tertiary_text]}>
            Loading...
          </Text>
        </View>
      )}
      <View style={styles.reposContainer}>{renderedListRepos}</View>
    </ScrollView>
  );
};

export default Explore;
