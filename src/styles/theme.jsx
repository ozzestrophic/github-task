import {StyleSheet} from 'react-native';
import RepoCard from '../components/RepoCard';

const styles = StyleSheet.create({
  main: {
    paddingTop: 44,
    flex: 1,
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
  },
  repoCard: {
    padding: 16,
  },
});

export default styles;
