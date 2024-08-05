import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import {useSelector} from 'react-redux';

const SelectForm = ({
  setModalVisible,
  setSelectedOption,
  selectedOption,
  passedOptions,
  placeholder,
  hideSelect,
}) => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  const [filteredOptions, setFilteredOptions] = useState(passedOptions);

  const filterOptions = text => {
    const newFilteredOptions = passedOptions.filter(option =>
      option.label.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredOptions(newFilteredOptions);
  };

  const handleSelect = option => {
    setSelectedOption(option.value);
    setModalVisible(false);
  };
  return (
    <View style={styles.selectFormContainer}>
      <View>
        {!hideSelect && (
          <TextInput
            style={[
              styles.selectFormSearchInput,
              theme.borderColor,
              theme.tertiary_text,
            ]}
            onChangeText={text => {
              filterOptions(text);
            }}
            placeholder={placeholder}
            placeholderTextColor={theme.tertiary_text.color}
          />
        )}
        <View>
          <FlatList
            data={filteredOptions}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={[
                  styles.selectListItem,
                  theme.borderColor,
                  item.value === selectedOption &&
                    theme.accent_color_background,
                ]}>
                <Text style={[styles.selectListItemText, theme.secondary_text]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default SelectForm;
