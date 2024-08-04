import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import TrendingRepoCard from '../components/TrendingRepoCard';
import {languageData} from '../utils/languages';
import ExploreLanguageModal from '../components/ExploreLanguageModal';
import SelectModal from '../components/SelectModal';
import ExploreDateModal from '../components/ExploreDateModal';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const [language, setLanguage] = useState('');
  const [date, setDate] = useState('2024-01-10');
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [languageSelectOpen, setLanguageSelectOpen] = useState(false);
  const [languageItems, setLanguageItems] = useState(languageData);

  useEffect(() => {
    store.dispatch(fetchRepos(10, date, language));
  }, [language, date]);
  const fetchedRepos = useSelector(selectRepositories);
  const reposFetchState = useSelector(state => state.repositories.loading);
  const renderedListRepos = fetchedRepos.map((item, index) => (
    <TrendingRepoCard key={index} repo={item} />
  ));
  return (
    <View style={{position: 'relative', flex: 1}}>
      {langModalVisible && <View style={styles.modalBackdrop} />}
      <ScrollView style={styles.tabComponent}>
        <Text style={styles.title}>Repositories</Text>
        <View style={styles.modalButtonsContainer}>
          <SelectModal
            title={'Select language'}
            modalVisible={langModalVisible}
            setModalVisible={setLangModalVisible}>
            <ExploreLanguageModal
              langModalVisible={langModalVisible}
              setLangModalVisible={setLangModalVisible}
              language={language}
              setLanguage={setLanguage}
              languageItems={languageItems}
              setLanguageItems={setLanguageItems}
              setOpen={setLanguageSelectOpen}
            />
          </SelectModal>
          <SelectModal
            title={'Select Date'}
            modalVisible={dateModalVisible}
            setModalVisible={setDateModalVisible}>
            <ExploreDateModal
              date={date}
              setDate={setDate}
              setDateModalVisible={setDateModalVisible}
            />
          </SelectModal>
          <Pressable
            style={styles.modalButton}
            onPress={() => setLangModalVisible(true)}>
            <Text style={styles.buttonLabel}>Language: </Text>
            <Text>{language ? language : 'Any'}</Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => setDateModalVisible(true)}>
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
    </View>
  );
};

export default Repositories;
