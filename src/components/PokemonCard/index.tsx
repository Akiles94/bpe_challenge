import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import useGetDetailedPokemons from '../../api/hooks/useGetDetailedPokemon';
import theme from '../../config/theme';
import {Pokemon} from '../../types/api';
import RandomIntFromInterval from '../../utils/random';
import {styles} from './styles';

const colors: {[key: string]: {normal: string; dark: string}} = {
  0: {
    normal: theme.colors.blue,
    dark: theme.colors.darkBlue,
  },
  1: {
    normal: theme.colors.red,
    dark: theme.colors.darkRed,
  },
  2: {
    normal: theme.colors.violet,
    dark: theme.colors.darkViolet,
  },
  3: {
    normal: theme.colors.orange,
    dark: theme.colors.darkOrange,
  },
};

export type Colors = typeof colors;

type Props = TouchableOpacityProps & {
  pokemon: Pokemon;
};

export default function PokemonCard({pokemon, ...props}: Props) {
  const {data} = useGetDetailedPokemons(pokemon.url || '');
  const color = colors[RandomIntFromInterval(0, 3)];
  const navigator = useNavigation();
  const handleOnPress = () => {
    const handledPokemon = {
      ...pokemon,
      ...data,
    } as Pokemon;
    navigator.navigate(
      'Detail' as never,
      {pokemon: handledPokemon, color} as never,
    );
  };
  return (
    <TouchableOpacity
      {...props}
      onPress={handleOnPress}
      style={{
        ...styles.container,
        backgroundColor: color.normal,
        borderColor: color.dark,
      }}>
      <Image
        style={styles.image}
        source={{uri: data?.sprites?.front_default}}
      />
      <Text style={styles.text}>{`#${data?.id}`}</Text>
      <Text style={styles.text}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}
