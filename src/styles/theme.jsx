import {StyleSheet} from 'react-native';

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
    backgroundColor: '#FAFCFE',
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Silka',
    fontWeight: 'normal',
    marginBottom: 16,
  },
  reposContainer: {
    marginTop: 16,
    gap: 16,
  },
  repoCard: {
    padding: 16,
    gap: 12,
    backgroundColor: '#FFFFFF',
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
    flex: 1,
    gap: 4,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'rgba(204,212,221,0.33 )',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  buttonLabel: {
    fontFamily: 'Silka',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7B848D',
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
    padding: 24,
    backgroundColor: '#FFFFFF',
    // minWidth: '90%',
    marginHorizontal: 24,
    height: '60%',
    borderRadius: 16,
    shadowColor: 'rgba(204,212,221,0.33)',
    elevation: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  selectMenuContainer: {
    // width: '100%',
    borderColor: '#FFFFFF',
    // height: '60%',
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
  },
  noHeight: {
    height: 0,
  },
});

export default styles;
