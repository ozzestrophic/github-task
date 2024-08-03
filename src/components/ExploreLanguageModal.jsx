import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles/theme';

const ExploreLanguageModal = ({
  languageItems,
  language,
  setLanguage,
  setOpen,
  setLanguageItems,
}) => {
  return (
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
  );
};

export default ExploreLanguageModal;
