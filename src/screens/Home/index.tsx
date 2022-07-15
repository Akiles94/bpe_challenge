import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import useGetPokemons from '../../api/hooks/useGetPokemons';
import {Button, Input, Loader, PokemonCard} from '../../components';
import {styles} from './styles';

export default function HomeScreen() {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const {data, refetch, isLoading} = useGetPokemons({offset: page * 10});
  const handledData = useMemo(
    () =>
      data?.filter(item =>
        item.name?.toLowerCase().includes(search.toLocaleLowerCase()),
      ),
    [data, search],
  );
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return isLoading ? (
    <Loader />
  ) : (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Listado de Pokemons</Text>
      <Input
        width="90%"
        placeholder="Buscar"
        isSearch
        value={search}
        onChangeText={(val: string) => setSearch(val)}
      />
      <View style={styles.cardsContainer} testID="cards-container">
        {handledData &&
          handledData.map(item => (
            <PokemonCard key={item.name} pokemon={item} testID="cards" />
          ))}
      </View>
      <View style={styles.navSection}>
        {page > 0 && (
          <Button
            containerStyles={styles.button}
            onPress={() => setPage(page - 1)}
            title="Atrás"
          />
        )}
        <Button
          containerStyles={styles.button}
          onPress={() => setPage(page + 1)}
          title="Siguiente"
        />
      </View>
    </ScrollView>
  );
}
