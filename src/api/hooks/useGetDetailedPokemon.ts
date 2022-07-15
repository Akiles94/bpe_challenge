import {useQuery, UseQueryOptions} from 'react-query';
import {Pokemon} from '../../types/api';
import api from '..';

const getDetailedPokemon = async (url: string) => {
  const {data} = await api({baseURL: url});

  return data;
};

const useGetDetailedPokemons = (
  url: string,
  options?: UseQueryOptions<unknown, unknown, Pokemon, string>,
) => useQuery(url, () => getDetailedPokemon(url), options);
export default useGetDetailedPokemons;
