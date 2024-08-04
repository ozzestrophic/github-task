import React from 'react';
import styles from '../styles/theme';
import DateTimePicker from 'react-native-ui-datepicker';
import {View} from 'react-native';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const ExploreDateModal = ({date, setDate, setDateModalVisible}) => {
  const hideDatePicker = () => setDateModalVisible(false);
  dayjs.extend(utc);

  const createDate = params => {
    const selectedDate = dayjs(params.date).format('YYYY-MM-DD');
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.dateModalContainer}>
      <DateTimePicker
        mode="single"
        date={date}
        calendarTextStyle={styles.dateModalCalendarTextStyle}
        onChange={createDate}
        headerButtonsPosition="right"
        weekDaysTextStyle={styles.dateModalWeekDaysTextStyle}
        headerTextStyle={styles.silkaBold}
        selectedItemColor="rgba(104,221,186,0.25)"
        todayContainerStyle={styles.dateModalTodayContainerStyle}
        todayTextStyle={styles.dateModalTodayTextStyle}
        selectedTextStyle={styles.dateModalSelectedTextStyle}
      />
    </View>
  );
};
export default ExploreDateModal;
