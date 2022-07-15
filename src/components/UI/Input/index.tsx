import React from 'react';
import {
  Image,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './style';

type Props = TextInputProps & {
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  width?: string;
  isSearch?: boolean;
};

export default function Input({
  containerStyles,
  inputStyles,
  width,
  isSearch,
  ...props
}: Props) {
  return (
    <View style={[containerStyles, styles.container, {width}]}>
      {isSearch && (
        <Image
          style={styles.icon}
          source={require('../../../assets/icon_search.png')}
        />
      )}
      <TextInput style={[inputStyles, styles.input, {width}]} {...props} />
    </View>
  );
}
