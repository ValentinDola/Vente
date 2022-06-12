import {
  Falsy,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  RecursiveArray,
  RegisteredStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {theme} from '../Constants';

const Button = (props: {
  btnStyle:
    | boolean
    | ViewStyle
    | RegisteredStyle<ViewStyle>
    | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>
    | readonly (Falsy | ViewStyle | RegisteredStyle<ViewStyle>)[]
    | null
    | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  uri: ImageSourcePropType;
  btntxtStyle:
    | boolean
    | TextStyle
    | RegisteredStyle<TextStyle>
    | RecursiveArray<Falsy | TextStyle | RegisteredStyle<TextStyle>>
    | readonly (Falsy | TextStyle | RegisteredStyle<TextStyle>)[]
    | null
    | undefined;
  text:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={props.onPress}>
      {props.uri && (
        <Image
          source={props.uri}
          style={{width: 30, height: 30, marginRight: 15}}
        />
      )}
      <Text style={[styles.btntxt, props.btntxtStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 3,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  btntxt: {
    fontSize: theme.sizes.h5,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.antiFlashWhite,
  },
});

export default Button;
