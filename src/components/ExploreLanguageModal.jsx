import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useSelector} from 'react-redux';

const ExploreLanguageModal = ({
  languageItems,
  language,
  setLanguage,
  setOpen,
  setLanguageItems,
  setLangModalVisible,
}) => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  return (
    <DropDownPicker
      dropDownContainerStyle={[
        styles.selectMenuContainer,
        theme.primary_background,
        theme.hideBorder,
      ]}
      style={[theme.hideBorder, theme.primary_background, theme.secondary_text]}
      textStyle={[styles.textStyle, theme.secondary_text]}
      labelStyle={styles.noHeight}
      arrowIconStyle={styles.noHeight}
      searchContainerStyle={[styles.searchContainerStyle, theme.hideBorder]}
      searchTextInputStyle={[styles.searchTextInputStyle, theme.tertiary_text]}
      listItemContainerStyle={theme.hideBorder}
      itemSeparator={true}
      itemSeparatorStyle={styles.itemSeparatorStyle}
      open={true}
      placeholder="Select Language"
      searchPlaceholder="Filter languages"
      value={language}
      items={languageItems}
      // TODO: remove hard coding
      maxHeight={300}
      searchable={true}
      setOpen={setOpen}
      setValue={setLanguage}
      setItems={setLanguageItems}
      onChangeValue={() => setLangModalVisible(false)}
    />
  );
};

export default ExploreLanguageModal;
