import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/style';

const styles = StyleSheet.create({
  main: {
    paddingTop: 64,
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
    paddingHorizontal: 12,
  },
  tabComponent: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 12,
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
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  reposContainer: {
    marginTop: 16,
    gap: 16,
  },
  repoCard: {
    padding: 16,
    gap: 12,
    borderRadius: 13,
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
    // backgroundColor: 'rgba(43, 17, 144, 0.11)',
    borderRadius: 4,
  },
  repoCardTitleContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
  repoCardTitle: {
    fontFamily: 'Silka',
    fontSize: 18,
    fontWeight: '500',
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
    gap: 24,
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
    width: '45%',
  },
  dropDownPicker: {
    borderRadius: 13,
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
    // minWidth: '90%',
    marginHorizontal: 24,
    minHeight: '45%',
    // minHeight: 'fit-content',
    // overflow: 'hidden',
    borderRadius: 16,
    elevation: 20,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 1,
    // shadowRadius: 5,
  },
  modalHeader: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
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
    shadowOpacity: 0,
  },
  searchContainerStyle: {
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
  accent_color_background: {
    backgroundColor: COLORS.light.accent_color_faded_bg,
  },
  hideBorder: {
    borderColor: COLORS.light.primary_background,
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
  accent_color_background: {
    backgroundColor: COLORS.dark.accent_color_faded_bg,
  },
  accent_color_faded: {
    color: COLORS.dark.accent_color_faded,
  },
  hideBorder: {
    borderColor: COLORS.dark.primary_background,
  },
});
