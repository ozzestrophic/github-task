import React from 'react';
import {View, Text, Image, Pressable, Modal} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles/theme';
import closeIcon from '../assets/icons/close.png';

const ExploreLanguageModal = ({
  langModalVisible,
  setLangModalVisible,
  languageItems,
  language,
  setLanguage,
  setOpen,
  setLanguageItems,
}) => {
  return (
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
              // TODO: remove hard coding
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
  );
};

export default ExploreLanguageModal;
