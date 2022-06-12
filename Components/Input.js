import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../Constants';

const Input = props => {
  const Label = () => <Text style={[styles.label]}>{props.label}</Text>;

  return (
    <View style={[styles.container]}>
      <TextInput
        style={[
          styles.input,
          props.onFocus && {borderColor: theme.colors.blue},
          props.onValid && {borderColor: 'green'},
          props.onError && {borderColor: theme.colors.red},
        ]}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.type}
        autoComplete={'off'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={props.secure}
        placeholder={props.label}
      />
      {/*<Label />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  // label: {
  //   position: 'relative',
  //   marginTop: -35,
  //   left: 34,
  //   color: theme.colors.black,
  //   height: 22,
  //   width: 95,
  //   fontSize: theme.sizes.h7,
  //   fontFamily: 'Nunito-SemiBold',
  // },
  input: {
    height: 50,
    marginHorizontal: 30,
    top: 40,
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.greyblack,
    borderRadius: 3,
    paddingLeft: 15,
    fontFamily: 'Nunito-SemiBold',
    fontSize: theme.sizes.h5,
  },
});

export default Input;
