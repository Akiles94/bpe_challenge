/* eslint-disable no-undef */
export const mockedNavigate = jest.fn();
export const mockedUseGetPokemons = jest.mock(
  '../src/api/hooks/useGetPokemons.ts',
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
