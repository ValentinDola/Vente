import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {theme} from '../Constants/index';

const Inscription = (props: {
  navigation: {navigate: (arg0: string) => void};
}): JSX.Element => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const Forms = () => {
    return (
      <View style={{marginVertical: 30}}>
        <Input
          label={'Email'}
          value={email}
          onChangeText={(text: React.SetStateAction<any>) => setEmail(text)}
          type={'email-address'}
          // onFocus
          // onValid
          // onError
        />
        <Input
          label={'Mot de Passe'}
          value={password}
          onChangeText={(text: React.SetStateAction<any>) => setPassword(text)}
          secure

          // onFocus
          // onValid
          // onError
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <Text style={[styles.introduction]}>Inscription</Text>
      </View>

      <View style={{flexDirection: 'row', flex: 0.1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: theme.colors.black,
            },
          ]}
          onPress={() => console.log('d')}>
          {/*<Image*/}
          {/*  source={require('../assets/icons/google.png')}*/}
          {/*  style={{marginRight: 10}}*/}
          {/*/>*/}
          <Text style={[styles.btntxt, {color: theme.colors.black}]}>
            Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: theme.colors.black,
            },
          ]}
          onPress={() => console.log('s')}>
          {/*<Image*/}
          {/*  source={require('../assets/icons/tiktok.png')}*/}
          {/*  style={{marginRight: 10}}*/}
          {/*/>*/}
          <Text style={[styles.btntxt, {color: theme.colors.black}]}>
            Tiktok
          </Text>
        </TouchableOpacity>
      </View>

      <Forms />

      <Button text={'Continuez'} onPress={() => console.log('next step')} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 25,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontSize: theme.sizes.h6,
            fontFamily: 'Nunito-SemiBold',
          }}>
          Vous n'avez pas de compte ?{' '}
        </Text>
        <Text
          style={{
            color: theme.colors.blue,
            fontSize: theme.sizes.h6,
            fontFamily: 'Nunito-SemiBold',
          }}
          onPress={() => props.navigation.navigate('Identification')}>
          S' identifier{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introduction: {
    fontSize: theme.sizes.h3,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.black,
    position: 'relative',
    marginTop: 50,
    marginLeft: 28,
  },
  btn: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 3,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  btntxt: {
    fontSize: theme.sizes.h4,
    fontFamily: 'Nunito-SemiBold',
    color: theme.colors.antiFlashWhite,
  },
});

export default Inscription;

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const Forms = () => {
//   return (
//     <View style={{marginVertical: 30}}>
//       <TextInput
//         style={{justifyContent: 'center'}}
//         defaultValue={email}
//         textInputStyle={styles.input}
//         onChangeText={(text: string) => {
//           console.log(text);
//         }}
//       />
//
//       <TextInput
//         style={{justifyContent: 'center'}}
//         defaultValue={password}
//         placeholder={'Mot de passe'}
//         textInputStyle={styles.input}
//         onChangeText={(text: string) => {
//           console.log(text);
//         }}
//       />
//     </View>
//   );
// };

// input: {
//   height: 50,
//   marginHorizontal: 30,
//   top: 40,
//   marginBottom: 20,
//   backgroundColor: theme.colors.grey,
//   borderWidth: 3,
//   borderRadius: 5,
//   fontFamily: 'Nunito-SemiBold',
//   fontSize: theme.sizes.h6,
// },
