import React from 'react';
import {DetailScreen} from '../src/screens';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {POKEMONS_MOCK} from './HomeScreen.test';
import theme from '../src/config/theme';

describe('<DetailScreen/>', () => {
  let component;
  beforeEach(() => {
    const queryClient = new QueryClient();
    component = render(
      <QueryClientProvider client={queryClient}>
        <DetailScreen
          route={{
            params: {
              pokemon: POKEMONS_MOCK[0],
              color: {normal: theme.colors.blue, dark: theme.colors.darkBlue},
            },
          }}
        />
      </QueryClientProvider>,
    );
  });

  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
});
