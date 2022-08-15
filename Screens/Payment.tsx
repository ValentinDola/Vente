import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../Constants/index';

const Payment = ({ navigation, route }: any) => {

    const Header = () => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 20,
                        marginHorizontal: 15,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            backgroundColor: theme.colors.grey,
                            padding: 5,
                            borderRadius: 10,
                            opacity: 0.7,
                        }}>
                        <Icon
                            name="ios-chevron-back-outline"
                            size={24}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>

                    <View>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-Bold', fontSize: 20 }} >
                            Mode de paiement
                        </Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: theme.colors.grey,
                        padding: 5,
                        borderRadius: 10,
                        opacity: 0.7,
                    }} >
                        <Icon
                            name={'close-outline'}
                            size={24}
                            color={theme.colors.black}
                        />
                    </TouchableOpacity>


                </View>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }} >
                        Temps restant
                    </Text>
                </View> */}
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Header />
        </View>
    )

}



const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F7',

        flex: 1,

    },
});

export default Payment;
