import {View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import React from 'react';
import {theme} from '../Constants';

interface TModalProps {
  modal: boolean;
}

const {width, height} = Dimensions.get('screen');

const TModal = (props: TModalProps) => {
  const {modal} = props;

  return (
    <Modal animated animationType="slide" visible={modal} transparent>
      <View style={styles.MContainer}>
        <View style={styles.modalContainer}>
          <View
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: 'black',
            }}>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: 'black',
                fontSize: theme.sizes.h6,
              }}>
              QRCODE
            </Text>
          </View>
          <View>
            <View></View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  MContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    height: height / 1.1,
    width: width / 1.2,
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default TModal;

{
  /* <Modal
    animated
    animationType="slide"
    visible={retraitModal}
    transparent
>

    <KeyboardAvoidingView
        style={[
            styles.MContainer
        ]} enabled={false}
        behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <Animated.View style={[styles.modalContainer]}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    marginHorizontal: 15,
                }}>
                <View>
                    <Text
                        style={{
                            color: theme.colors.black,
                            fontFamily: 'Nunito-Bold',
                            fontSize: 20,
                        }}>
                        Retrait
                    </Text>
                </View>

                <RNBounceable
                    style={{
                        backgroundColor: theme.colors.grey,
                        padding: 5,
                        borderRadius: 10,
                        opacity: 0.7,
                    }}
                    onPress={() => _handleRetraitDismiss()}>
                    <Icon
                        name={'close-outline'}
                        size={24}
                        color={theme.colors.black}
                    />
                </RNBounceable>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 15, marginBottom: 10 }}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                    Telephone
                </Text>
                <RNBounceable>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', position: 'absolute', top: 26, left: 35 }} >
                        +228
                    </Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View
                                    style={{
                                        marginHorizontal: 5,
                                        marginVertical: 10,
                                        backgroundColor: 'transparent',
                                        borderRadius: 3,
                                        paddingLeft: 50,
                                        width: '85%',
                                        borderWidth: 2,
                                        borderColor: theme.colors.blue,
                                    }}>
                                    <TextInput
                                        style={{
                                            color: 'black',
                                            fontFamily: 'Nunito-Bold',
                                            fontSize: 20,
                                        }}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder={'Telephone'}
                                        placeholderTextColor={'#D1D3D4'}
                                        underlineColorAndroid='transparent'
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                        )}
                        name="retraitPhone"
                    />
                </RNBounceable>
            </View>

            <View style={{ marginHorizontal: 15 }} >
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                    Montant
                </Text>
                <View>

                    <RNBounceable>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                                fieldState: { error },
                            }) => (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            marginHorizontal: 5,
                                            marginVertical: 10,
                                            backgroundColor: theme.colors.grey,
                                            borderRadius: 3,
                                            width: '85%',
                                            borderColor: '#e8e8e8',


                                        }}>
                                        <TextInput
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Nunito-Bold',
                                                fontSize: 20,

                                                textAlign: 'center',
                                            }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder={'FCFA'}
                                            placeholderTextColor={'#D1D3D4'}
                                            underlineColorAndroid='transparent'
                                            keyboardType='numeric'
                                        />
                                    </View>
                                </View>
                            )}
                            name="montant"
                        />
                    </RNBounceable>
                </View>
            </View>
            <View style={{ marginVertical: 20, marginHorizontal: 15 }} >
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: 'black', fontSize: theme.sizes.h6 }}>
                    Réseau
                </Text>
                <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                    <SwitchSelector
                        initial={1}
                        onPress={(value: any) => setRetraitNetwork(value)}
                        textColor={'#000'} //'#7a44cf'
                        selectedColor={'white'}
                        buttonColor={theme.colors.bluetiful}
                        borderColor={theme.colors.blue}
                        borderRadius={5}
                        borderWidth={2}
                        height={40}
                        hasPadding
                        textStyle={{ fontFamily: 'Nunito-Bold' }}
                        style={{ width: 250, height: 40 }}
                        options={[
                            { label: "FLOOZ", value: "FLOOZ", }, //images.feminino = require('./path_to/assets/img/feminino.png')
                            { label: "TMONEY", value: "TMONEY", } //images.masculino = require('./path_to/assets/img/masculino.png')
                        ]}
                        testID="network-switch-selector"
                        accessibilityLabel="network-switch-selector"
                    />
                </View>
            </View>
            <View
                style={{
                    height: 100,
                    width,
                    borderRadius: 10,
                    opacity: 0.9,
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    bottom: 0,
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        marginHorizontal: 20,
                    }}>
                    {
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <RNBounceable
                                style={{
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.bluetiful,
                                    width: width / 3,
                                    height: 40,
                                }}
                                onPress={() => setRetraitModal(false)}>
                                <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    Annuler
                                </Text>
                            </RNBounceable>
                            <RNBounceable
                                style={{
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.blue,
                                    width: width / 2,
                                    height: 40,
                                }}

                                onPress={handleSubmit(onRetraitSubmit)}>
                                <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    Retrait
                                </Text>
                            </RNBounceable>
                        </View>
                    }
                </View>
            </View>
        </Animated.View>
    </KeyboardAvoidingView>
</Modal> */
}
