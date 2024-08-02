import React, {useEffect, useState} from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {Dropdown} from 'react-native-element-dropdown';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const [language, setLanguage] = useState('');
  const [date, setDate] = useState('');
  const languageData = [
    {label: 'Javascript', value: 'Javascript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
    {label: 'C++', value: 'C++'},
    {label: 'C#', value: 'C#'},
    {label: 'PHP', value: 'PHP'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'Kotlin', value: 'Kotlin'},
    {label: 'Go', value: 'Go'},
    {label: 'C', value: 'C'},
    {label: 'Swift', value: 'Swift'},
    {label: 'Objective-C', value: 'Objective-C'},
    {label: 'Rust', value: 'Rust'},
    {label: 'R', value: 'R'},
    {label: 'Dart', value: 'Dart'},
    {label: 'Scala', value: 'Scala'},
    {label: 'Elixir', value: 'Elixir'},
    {label: 'Erlang', value: 'Erlang'},
    {label: 'TypeScript', value: 'TypeScript'},
    {label: 'Cobol', value: 'Cobol'},
    {label: 'Haskell', value: 'Haskell'},
    {label: 'Rust', value: 'Rust'},
    {label: 'F#', value: 'F#'},
    {label: 'Clojure', value: 'Clojure'},
    {label: 'Racket', value: 'Racket'},
    {label: 'Julia', value: 'Julia'},
    {label: 'Forth', value: 'Forth'},
    {label: 'Pascal', value: 'Pascal'},
    {label: 'Solidity', value: 'Solidity'},
    {label: 'Haxe', value: 'Haxe'},
    {label: 'Erlang', value: 'Erlang'},
  ];
  useEffect(() => {
    store.dispatch(fetchRepos(10, date, language));
  }, [language, date]);
  const fetchedRepos = useSelector(selectRepositories);
  const reposFetchState = useSelector(state => state.repositories.loading);
  const renderedListRepos = fetchedRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));
  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Repositories</Text>
      <View style={styles.modalButtonsContainer}>
        <Dropdown
          style={styles.modalButton}
          containerStyle={styles.modalContainer}
          mode="modal"
          placeholderStyle={styles.buttonLabel}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={languageData}
          search
          labelField="label"
          valueField="value"
          placeholder="Language"
          searchPlaceholder="Filter language"
          value={language}
          onChange={item => {
            setLanguage(item.value);
          }}
        />
        <Pressable style={styles.modalButton}>
          <Text style={styles.buttonLabel}>Date: </Text>
          <Text>{date ? date : 'Any'}</Text>
        </Pressable>
      </View>
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
