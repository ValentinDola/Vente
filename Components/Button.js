import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import {theme} from '../Constants';

const Button = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        style={[styles.btn, props.btnStyle]}
        onPress={props.onPress}>
        {props.uri && (
          <Image source={props.uri} style={{width: 30, height: 30, marginRight: 15}} />
        )}
        <Text style={[styles.btntxt, props.btntxtStyle]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
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
    marginHorizontal: 15,
  },
  btntxt: {
    fontSize: theme.sizes.h4,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.antiFlashWhite,
  },
});

export default Button;
