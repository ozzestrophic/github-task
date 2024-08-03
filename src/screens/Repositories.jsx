import React, {useEffect, useState} from 'react';
import {Image, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import styles from '../styles/theme';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import TrendingRepoCard from '../components/TrendingRepoCard';
import DropDownPicker from 'react-native-dropdown-picker';
import closeIcon from '../assets/icons/close.png';
import {languageData} from '../utils/languages';
import ExploreLanguageModal from '../components/ExploreLanguageModal';
import SelectModal from '../components/SelectModal';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const [language, setLanguage] = useState('');
  const [date, setDate] = useState('');
  const [langModalVisible, setLangModalVisible] = useState(false);
  // const [dateModalVisible, setDateModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageItems, setLanguageItems] = useState(languageData);

  useEffect(() => {
    store.dispatch(fetchRepos(10, '2019-01-10', language));
  }, [language]);
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
            modalVisible={langModalVisible}
            setModalVisible={setLangModalVisible}>
            <ExploreLanguageModal
              langModalVisible={langModalVisible}
              setLangModalVisible={setLangModalVisible}
              language={language}
              setLanguage={setLanguage}
              languageItems={languageItems}
              setLanguageItems={setLanguageItems}
              setOpen={setOpen}
            />
          </SelectModal>
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
    </View>
  );
};

export default Repositories;
