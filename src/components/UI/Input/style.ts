import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    borderColor: theme.colors.black,
    borderRadius: 2,
    borderWidth: 0.8,
  },
  input: {
    fontSize: 15,
    color: theme.colors.black,
  },
  icon: {
    marginTop: 12,
    marginHorizontal: 5,
  },
});
