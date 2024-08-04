import React, {useState} from 'react';
import styles from '../styles/theme';
import DateTimePicker from 'react-native-ui-datepicker';
import {Button, View} from 'react-native';

const ExploreDateModal = ({setDate, setDateModalVisible}) => {
  const hideDatePicker = () => setDateModalVisible(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <View style={styles.dateModalContainer}>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePicker
        mode="single"
        date={selectedDate}
        calendarTextStyle={styles.dateModalCalendarTextStyle}
        onChange={params => setDate(params.date)}
        headerButtonsPosition="right"
        weekDaysTextStyle={styles.dateModalWeekDaysTextStyle}
        headerTextStyle={styles.silkaBold}
        selectedItemColor="rgba(104,221,186,0.25)"
        selectedTextStyle={styles.dateModalSelectedTextStyle}
      />
    </View>
  );
};
export default ExploreDateModal;
