import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  mainImage: {
    width: '80%',
    height: 200,
  },
  secondaryImage: {
    width: '20%',
    height: 80,
  },
  headerSection: {
    alignItems: 'center',
  },
  mainText: {
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  secondaryText: {
    marginLeft: 10,
    textAlign: 'justify',
  },
  spritesSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
