import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import type {Colors} from '../../components/PokemonCard';
import {Pokemon} from '../../types/api';
import {styles} from './style';

type Props = {
  route: {
    params: {
      pokemon: Pokemon;
      color: Colors[number];
    };
  };
};

export default function Detail({route}: Props) {
  const {pokemon, color} = route.params;
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: color.normal},
      ]}>
      <View style={styles.headerSection}>
        <Image
          style={styles.mainImage}
          source={{uri: pokemon.sprites?.front_default}}
        />
        <Text style={styles.mainText}>{`#${pokemon.id}`}</Text>
        <Text style={styles.mainText}>{pokemon.name}</Text>
      </View>
      <Text style={styles.mainText}>Types</Text>
      {pokemon.types?.map(item => (
        <Text style={styles.secondaryText} key={item.slot}>
          {item.type.name}
        </Text>
      ))}
      <Text style={styles.mainText}>Peso</Text>
      <Text style={styles.secondaryText}>{`${pokemon.weight} kg`}</Text>
      <Text style={styles.mainText}>Sprites</Text>
      <View style={styles.spritesSection}>
        <Image
          style={styles.secondaryImage}
          source={{uri: pokemon.sprites?.front_default}}
        />
        <Image
          style={styles.secondaryImage}
          source={{uri: pokemon.sprites?.back_default}}
        />
        <Image
          style={styles.secondaryImage}
          source={{uri: pokemon.sprites?.back_shiny}}
        />
        <Image
          style={styles.secondaryImage}
          source={{uri: pokemon.sprites?.front_shiny}}
        />
      </View>
      <Text style={styles.mainText}>Movimientos</Text>
      <Text style={styles.secondaryText}>
        {pokemon.moves?.map(item => ` ${item.move.name}`)}
      </Text>
    </ScrollView>
  );
}
