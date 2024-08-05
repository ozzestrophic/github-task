import React from 'react';
import styles, {darkColors, lightColors} from '../styles/theme';
import DateTimePicker from 'react-native-ui-datepicker';
import {View} from 'react-native';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {useSelector} from 'react-redux';

const ExploreDateModal = ({date, setDate, setDateModalVisible}) => {
  const hideDatePicker = () => setDateModalVisible(false);
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;
  dayjs.extend(utc);

  const createDate = params => {
    const selectedDate = dayjs(params.date).format('YYYY-MM-DD');
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <View style={[styles.dateModalContainer, theme.topBorder]}>
      <DateTimePicker
        mode="single"
        date={date}
        calendarTextStyle={[
          styles.dateModalCalendarTextStyle,
          theme.secondary_text,
        ]}
        headerTextContainerStyle={theme.secondary_text}
        headerTextStyle={(styles.silkaBold, theme.secondary_text)}
        headerButtonColor={
          colorMode === 'light'
            ? theme.primary_text.color
            : theme.accent_color.color
        }
        onChange={createDate}
        yearContainerStyle={[theme.primary_background, theme.hideBorder]}
        monthContainerStyle={[theme.primary_background, theme.hideBorder]}
        headerButtonsPosition="right"
        weekDaysTextStyle={theme.tertiary_text}
        selectedItemColor="rgba(104,221,186,0.25)"
        todayContainerStyle={styles.dateModalTodayContainerStyle}
        todayTextStyle={styles.dateModalTodayTextStyle}
        selectedTextStyle={styles.dateModalSelectedTextStyle}
      />
    </View>
  );
};
export default ExploreDateModal;
