import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/theme';

const SelectForm = (setModalVisible, setSelectedOption, selectedOption) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
  ];
  const [filteredOptions, setFilteredOptions] = useState([...options]);

  //   let filteredOptions = [...options];

  const filterOptions = text => {
    const newFilteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredOptions(newFilteredOptions);
  };

  const handleSelect = option => {
    setSelectedOption(option);
    setModalVisible(false);
  };
  return (
    <View style={{width: '100%'}}>
      <View>
        <TextInput
          style={{
            padding: 8,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: 'gray',
            width: '100%',
            color: 'gray',
          }}
          onChangeText={text => {
            filterOptions(text);
          }}
          placeholder="Search..."
        />
        <View>
          <FlatList
            data={filteredOptions}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default SelectForm;
