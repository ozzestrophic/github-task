import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import store from '../redux/store';
import {fetchRepos} from '../redux/repositoriesSlice';
import {useSelector} from 'react-redux';
import {languageData} from '../utils/languages';
import SelectModal from '../components/SelectModal';
import ExploreDateModal from '../components/ExploreDateModal';
import dayjs from 'dayjs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import RepoCard from '../components/RepoCard';
import SelectForm from '../components/SelectForm';

const selectRepositories = state => state.repositories.repos;

const Repositories = () => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  const [language, setLanguage] = useState({label: '', value: ''});
  const [date, setDate] = useState('2024-01-01');
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);

  useEffect(() => {
    store.dispatch(fetchRepos(10, date, language.value));
  }, [language, date]);
  const fetchedRepos = useSelector(selectRepositories);
  const reposFetchState = useSelector(state => state.repositories.loading);
  const renderedListRepos = fetchedRepos.map((item, index) => (
    <RepoCard key={index} repo={item} />
  ));
  return (
    <View style={styles.flex1}>
      <ScrollView style={[styles.tabComponent, theme.secondary_background]}>
        <Text style={[styles.title, theme.secondary_text]}>Repositories</Text>
        <View style={styles.modalButtonsContainer}>
          <SelectModal
            title={'Select language'}
            modalVisible={langModalVisible}
            setModalVisible={setLangModalVisible}>
            <SelectForm
              setModalVisible={setLangModalVisible}
              setSelectedOption={setLanguage}
              selectedOption={language}
              passedOptions={languageData}
              placeholder={'Filter Languages'}
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
            style={[
              styles.modalButton,
              theme.primary_background,
              theme.secondary_border,
            ]}
            onPress={() => setLangModalVisible(true)}>
            <Text style={[styles.buttonLabel, theme.tertiary_text]}>
              {language ? 'Lang: ' : 'Language: '}{' '}
            </Text>
            <Text style={theme.secondary_text}>
              {language.value ? language.label : 'Any'}
            </Text>
            <FontAwesomeIcon
              icon={faChevronDown}
              size={12}
              style={[styles.marginLeftAuto, theme.secondary_text]}
            />
          </Pressable>
          <Pressable
            style={[
              styles.modalButton,
              theme.primary_background,
              theme.secondary_border,
            ]}
            onPress={() => setDateModalVisible(true)}>
            <Text style={[styles.buttonLabel, theme.tertiary_text]}>
              Date:{' '}
            </Text>
            <Text style={theme.secondary_text}>
              {date ? dayjs(date).format('D MMM YY') : 'Any'}
            </Text>
            <FontAwesomeIcon
              icon={faChevronDown}
              size={12}
              style={[styles.marginLeftAuto, theme.secondary_text]}
            />
          </Pressable>
        </View>
        {reposFetchState && (
          <View>
            <Text style={[styles.repoFetchIndicator, theme.tertiary_text]}>
              Loading...
            </Text>
          </View>
        )}
        <View style={styles.reposContainer}>{renderedListRepos}</View>
      </ScrollView>
    </View>
  );
};

export default Repositories;
