import React from 'react';
import {
  Button as BaseButton,
  ButtonProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './style';

type Props = ButtonProps & {
  containerStyles?: StyleProp<ViewStyle>;
  width?: string;
};

export default function Button({containerStyles, width, ...props}: Props) {
  return (
    <View style={[containerStyles, styles.container, {width}]}>
      <BaseButton {...props} />
    </View>
  );
}
