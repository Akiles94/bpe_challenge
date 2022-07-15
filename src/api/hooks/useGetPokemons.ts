import {useQuery, UseQueryOptions} from 'react-query';
import {ListResponse} from '../../types/api';
import api from '..';

export const GET_POKEMONS = 'GET_POKEMONS';

type Params = {
  limit?: number;
  offset?: number;
};

const getPokemons = async ({limit = 10, offset = 0}: Params) => {
  const {
    data: {results},
  } = await api.get<ListResponse>(`/pokemon/?limit=${limit}&offset=${offset}`);

  return results;
};

const useGetPokemons = (
  params?: Params,
  options?: UseQueryOptions<
    unknown,
    unknown,
    ListResponse['results'],
    typeof GET_POKEMONS
  >,
) => useQuery(GET_POKEMONS, () => getPokemons(params || {}), options);
export default useGetPokemons;
