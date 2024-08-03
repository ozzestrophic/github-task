import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from '../styles/theme';
import {Button, View} from 'react-native';

const ExploreDateModal = ({setDate, setDateModalVisible}) => {
  const hideDatePicker = () => setDateModalVisible(false);
  return (
    <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={true}
        display="inline"
        mode="date"
        onConfirm={setDate}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default ExploreDateModal;
