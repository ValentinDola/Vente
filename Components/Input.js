import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../Constants';

const Input = props => {
  const [text, onChangeText] = React.useState('Useless Text');
  const Label = () => <Text style={[styles.label]}>{props.label}</Text>;

  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.input, props.inputStyle]}
        onChangeText={onChangeText}
        value={text}
      />
      <Label />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  label: {
    position: 'relative',
    marginTop: -35,
    left: 34,
    color: theme.colors.black,
    height: 22,
    width: 95,
    fontSize: theme.sizes.h7,
    fontFamily: 'Nunito-SemiBold',
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    marginTop: 40,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 3,
    paddingLeft: 95,
    fontFamily: 'Nunito-SemiBold',
    fontSize: theme.sizes.h5,
  },
});

export default Input;
