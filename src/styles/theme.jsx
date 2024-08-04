import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/style';

// TODO: Add theme colors
const styles = StyleSheet.create({
  main: {
    paddingTop: 44,
    flex: 1,
  },
  logoImage: {
    width: 112,
    objectFit: 'contain',
  },
  logoBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  tabComponent: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Silka',
    fontWeight: '500',
    marginBottom: 16,
  },
  flex1: {
    flex: 1,
  },
  reposContainer: {
    marginTop: 16,
    gap: 16,
  },
  repoCard: {
    padding: 16,
    gap: 12,
    backgroundColor: '#ffffff',
    borderRadius: 13,
    shadowColor: 'rgba(204,212,221,0.33 )',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  repoCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repoCardTag: {
    fontFamily: 'Silka',
    fontSize: 10,
    fontWeight: 'normal',
    color: '#7b848d',
  },
  repoCardStarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  repoCardStarLabel: {
    fontFamily: 'Silka',
    fontSize: 12,
    fontWeight: '500',
  },
  repoCardStarCounterContainer: {
    padding: 4,
    backgroundColor: 'rgba(43, 17, 144, 0.11)',
    borderRadius: 4,
  },
  repoCardStarCounter: {
    color: '#2b1190',
  },
  repoCardTitle: {
    fontFamily: 'Silka',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#2B1190',
  },
  repoCardDescription: {
    fontFamily: 'Silka',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 18,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 12,
  },
  repoCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  silkaNormal: {
    fontFamily: 'Silka',
    fontSize: 12,
    fontWeight: 'normal',
  },
  silkaBold: {
    fontFamily: 'Silka',
    fontSize: 16,
    fontWeight: '500',
  },
  dropDownPickerContainer: {
    borderRadius: 13,
    borderColor: '#ffffff',
    width: '45%',
  },
  dropDownPicker: {
    borderRadius: 13,
    borderColor: '#ffffff',
    width: '45%',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    flex: 1,
    padding: 12,
    borderRadius: 8,
  },
  buttonLabel: {
    fontFamily: 'Silka',
    fontSize: 14,
    fontWeight: 'normal',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  modalContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    // minWidth: '90%',
    marginHorizontal: 24,
    minHeight: '45%',
    // minHeight: 'fit-content',
    // overflow: 'hidden',
    borderRadius: 16,
    shadowColor: 'rgba(204,212,221,0.33)',
    elevation: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  modalHeader: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    top: 24,
    left: 24,
    zIndex: 2,
  },
  modalTitle: {
    fontFamily: 'Silka',
    fontSize: 14,
    fontWeight: '500',
  },
  inputSearchStyle: {
    fontFamily: 'Silka',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7B848D',
    borderRadius: 8,
  },
  itemSeparatorStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  selectMenuWrapper: {
    zIndex: 1,
  },
  selectMenuContainer: {
    // width: '100%',
    borderColor: '#FFFFFF',
    shadowOpacity: 0,
  },
  searchContainerStyle: {
    borderBottomColor: '#ffffff',
    padding: 0,
  },
  searchTextInputStyle: {
    borderColor: '#d9d9d9',
    fontFamily: 'Silka',
    height: 40,
  },
  textStyle: {
    fontFamily: 'Silka',
    fontSize: 14,
    fontWeight: '500',
  },
  noHeight: {
    height: 0,
  },
  hideBorder: {
    borderColor: 'white',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  dateModalContainer: {
    marginTop: 48,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    paddingTop: 24,
  },
  dateModalSelectedTextStyle: {
    color: '#68DDBA',
    fontFamily: 'Silka',
    fontWeight: '600',
    fontSize: 22,
  },
  dateModalWeekDaysTextStyle: {color: 'gray'},
  dateModalCalendarTextStyle: {fontFamily: 'Silka', fontSize: 17},
  dateModalTodayContainerStyle: {
    borderColor: 'rgba(104,221,186,0.25)',
  },
  dateModalTodayTextStyle: {
    color: 'rgba(104,221,186,1)',
    fontWeight: '600',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
  repoFetchIndicator: {textAlign: 'center', padding: 10},
});

export default styles;

export const lightColors = StyleSheet.create({
  primary_background: {
    backgroundColor: COLORS.light.primary_background,
  },
  secondary_background: {
    backgroundColor: COLORS.light.secondary_background,
  },
  secondary_border: {
    borderColor: COLORS.light.secondary_border,
    shadowColor: 'rgba(204,212,221,0.33 )',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  primary_text: {
    color: COLORS.light.primary_text,
  },
  secondary_text: {
    color: COLORS.light.secondary_text,
  },
  tertiary_text: {
    color: COLORS.light.tertiary_text,
  },
  accent_color: {
    color: COLORS.light.accent_color,
  },
  accent_color_faded: {
    color: COLORS.light.accent_color_faded,
  },
});
export const darkColors = StyleSheet.create({
  primary_background: {
    backgroundColor: COLORS.dark.primary_background,
  },
  secondary_background: {
    backgroundColor: COLORS.dark.secondary_background,
  },
  secondary_border: {
    borderColor: COLORS.dark.secondary_border,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  primary_text: {
    color: COLORS.dark.primary_text,
  },
  secondary_text: {
    color: COLORS.dark.secondary_text,
  },
  tertiary_text: {
    color: COLORS.dark.tertiary_text,
  },
  accent_color: {
    color: COLORS.dark.accent_color,
  },
  accent_color_faded: {
    color: COLORS.dark.accent_color_faded,
  },
});
