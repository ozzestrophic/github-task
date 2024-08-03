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

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const [language, setLanguage] = useState(null);
  const [date, setDate] = useState('');
  const [langModalVisible, setLangModalVisible] = useState(false);
  // const [dateModalVisible, setDateModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageItems, setLanguageItems] = useState(languageData);

  useEffect(() => {
    store.dispatch(fetchRepos(10, '2019-01-10', 'Javascript'));
  }, []);
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
                    <Image source={closeIcon} style={styles.closeIcon} />
                  </Pressable>
                </View>
                <View style={styles.selectMenuWrapper}>
                  <DropDownPicker
                    dropDownContainerStyle={styles.selectMenuContainer}
                    style={styles.hideBorder}
                    textStyle={styles.textStyle}
                    labelStyle={styles.noHeight}
                    arrowIconStyle={styles.noHeight}
                    searchContainerStyle={styles.searchContainerStyle}
                    searchTextInputStyle={styles.searchTextInputStyle}
                    itemSeparator={true}
                    itemSeparatorStyle={styles.itemSeparatorStyle}
                    open={true}
                    placeholder="Select Language"
                    searchPlaceholder="Filter languages"
                    value={language}
                    items={languageItems}
                    maxHeight={400}
                    searchable={true}
                    setOpen={setOpen}
                    setValue={setLanguage}
                    setItems={setLanguageItems}
                  />
                </View>
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
    </View>
  );
};

export default Repositories;
