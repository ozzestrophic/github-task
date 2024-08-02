import React, {useEffect, useState} from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {Dropdown} from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const [language, setLanguage] = useState(null);
  const [date, setDate] = useState('');
  const [langModalVisible, setLangModalVisible] = useState(false);
  // const [dateModalVisible, setDateModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageItems, setLanguageItems] = useState([
    {label: 'Javascript', value: 'Javascript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
  ]);
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
    store.dispatch(fetchRepos(10, '2019-01-10', 'Javascript'));
  }, []);
  const fetchedRepos = useSelector(selectRepositories);
  const reposFetchState = useSelector(state => state.repositories.loading);
  const renderedListRepos = fetchedRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));
  return (
    <ScrollView style={styles.tabComponent}>
      <Text style={styles.title}>Repositories</Text>
      <View style={styles.modalButtonsContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={langModalVisible}
          onRequestClose={() => {
            setLangModalVisible(!langModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Language</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setLangModalVisible(!langModalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
              <DropDownPicker
                open={open}
                value={language}
                items={languageItems}
                setOpen={setOpen}
                setValue={setLanguage}
                setItems={setLanguageItems}
              />
              {/* <Dropdown
                // style={styles.modalButton}
                containerStyle={styles.selectMenuContainer}
                placeholderStyle={styles.buttonLabel}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={languageData}
                search
                labelField="label"
                valueField="value"
                placeholder="Language"
                searchPlaceholder="Filter language"
                open={true}
                value={language}
                onChange={item => {
                  setLanguage(item.value);
                }}
              /> */}
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.modalButton}
          onPress={() => setLangModalVisible(true)}>
          <Text style={styles.buttonLabel}>Language: </Text>
          <Text>{language ? language : 'Any'}</Text>
        </Pressable>
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
