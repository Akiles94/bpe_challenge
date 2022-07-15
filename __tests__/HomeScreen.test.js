import React from 'react';
import {HomeScreen} from '../src/screens';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import useGetPokemons from '../src/api/hooks/useGetPokemons';
import navigation from '@react-navigation/native';

export const POKEMONS_MOCK = [
  {
    name: 'Charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
];

jest.mock('../src/api/hooks/useGetPokemons', () => jest.fn());
jest.mock('@react-navigation/native', () => jest.fn());

describe('<HomeScreen/>', () => {
  let component;
  let cardsRendered;
  beforeEach(() => {
    const queryClient = new QueryClient();
    useGetPokemons.mockImplementation(() => ({
      data: POKEMONS_MOCK,
      isLoading: false,
      refetch: jest.fn(),
    }));
    navigation.useNavigation = jest.fn();
    component = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>,
    );
  });

  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('Load data cards', () => {
    cardsRendered = component.queryAllByTestId('cards');
    expect(cardsRendered.length).toBeGreaterThan(0);
    expect(cardsRendered.length).toBe(4);
  });
});
