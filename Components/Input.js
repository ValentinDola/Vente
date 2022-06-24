import React, { useState } from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../Constants';

const Input = props => {
  const [focusColor, setFocusColor] = useState(theme.colors.black);
  const Label = () => <Text style={[styles.label]}>{props.label}</Text>;

  return (
    <View style={[styles.container]}>
      <TextInput
        style={[
          styles.input,
          {borderColor: focusColor},
          // props.onFocus && {borderColor: theme.colors.blue},
          // props.onValid && {borderColor: 'green'},
          // props.onError && {borderColor: theme.colors.red},
        ]}
        onFocus={() => setFocusColor(theme.colors.blue)}
        onBlur={() => setFocusColor(theme.colors.black)}
        onChangeText={props.onChangeText}
        defaultValue={props.value}

        autoComplete={'off'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={props.secure}
        placeholder={props.label}
        editable={true}
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
    borderWidth: 3,
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: 'Nunito-SemiBold',
    fontSize: theme.sizes.h6,
  },
});

export default Input;
