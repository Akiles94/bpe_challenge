import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontSize: 18,
    color: theme.colors.black,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  navSection: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: '25%',
  },
});
