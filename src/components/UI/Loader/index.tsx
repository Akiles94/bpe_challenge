import React from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import theme from '../../../config/theme';
import {styles} from './style';

export default function Loader() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.blue} />
    </ScrollView>
  );
}
