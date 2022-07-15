import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Router from './src/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
