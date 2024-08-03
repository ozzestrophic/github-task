import React, {useState} from 'react';
import styles from '../styles/theme';
import DateTimePicker from 'react-native-ui-datepicker';
import {Button, View} from 'react-native';

const ExploreDateModal = ({setDate, setDateModalVisible}) => {
  const hideDatePicker = () => setDateModalVisible(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePicker
        mode="single"
        date={selectedDate}
        onChange={params => setDate(params.date)}
      />
    </View>
  );
};
export default ExploreDateModal;
