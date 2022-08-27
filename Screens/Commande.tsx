import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, ScrollView, Dimensions, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../Constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import { selectUser } from '../Slices/user';
import { useSelector } from 'react-redux';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Header from '../Components/Header';
import Checkbox from '../Components/Checkbox';


const { width, height } = Dimensions.get('screen');

const Commande = ({ navigation, route }: any) => {

    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nom: user?.nom,
            prenom: user?.prenom,
            email: user?.email,



        },
    });

    const [selectedEvent, setSelectedEvent]: any = useState({});
    const [isYesChecked, setIsYesChecked] = useState(false);
    const [isNoChecked, setIsNoChecked] = useState(false);
    const [conditions, setConditions] = useState(false);
    const [numTicket, setNumTickets] = useState('1');


    useEffect(() => {
        let { selectedEvent } = route.params;
        setSelectedEvent(selectedEvent);
    }, []);

    const onSubmit = (data: any) => {
        const newData = { data, conditions, numTicket };
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            if (newData) {
                navigation.navigate('Payment', { newData, selectedEvent });
                console.log(newData, selectedEvent);
            } else {
                return null;
            }
        }, 3000);




    }





    const Coordonnees = () => {
        return (
            <View style={{ marginVertical: 30, marginHorizontal: 15 }} >
                <View>
                    <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 30 }} >Coordonnees</Text>
                </View>
                <View style={{ marginTop: 10, }} >
                    <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 12 }} >{<Text style={{ color: 'red' }} >*</Text>}Obligatoire</Text>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                                alignItems: 'center',
                            }}>
                            {/* Type */}
                            <View>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}

                                    render={({
                                        field: { onChange, onBlur, value, },
                                        fieldState: { error },
                                    }) => (
                                        <View
                                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View
                                                style={[
                                                    styles.container,

                                                    { borderColor: theme.colors.blue, width: 160 },

                                                ]}>
                                                <TextInput
                                                    style={{
                                                        fontSize: 17,
                                                        color: 'black',
                                                        fontFamily: 'Nunito-SemiBold',
                                                    }}
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}

                                                    value={value}
                                                    placeholder={'Nom'}
                                                    placeholderTextColor={'black'}
                                                />
                                            </View>
                                        </View>
                                    )}
                                    name="nom"
                                />

                            </View>
                            {/* Categorie */}
                            <View>
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
                                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View
                                                style={[
                                                    styles.container,
                                                    { width: 160 },
                                                    { borderColor: theme.colors.blue }
                                                ]}>
                                                <TextInput
                                                    style={{
                                                        fontSize: 17,
                                                        color: 'black',
                                                        fontFamily: 'Nunito-SemiBold',
                                                    }}
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}

                                                    defaultValue={value}
                                                    placeholder={'Prenom'}
                                                    placeholderTextColor={'black'}
                                                />
                                            </View>
                                        </View>
                                    )}
                                    name="prenom"
                                />

                            </View>
                        </View>
                    </View>
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                                fieldState: { error },
                            }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View
                                        style={[
                                            styles.container,
                                            { borderColor: theme.colors.blue, backgroundColor: theme.colors.grey },
                                        ]}>
                                        <TextInput
                                            style={{
                                                fontSize: 17,
                                                paddingRight: 40,
                                                color: 'black',
                                                fontFamily: 'Nunito-SemiBold',
                                            }}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder={'Email'}
                                            placeholderTextColor={'black'}
                                            editable={false}
                                        />
                                    </View>
                                </View>
                            )}
                            name="email"
                        />

                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Pressable style={{ width: 20, height: 20 }} onPress={() => console.log('press')} >

                        <Checkbox isChecked={true} />
                    </Pressable>
                    <View style={{ marginHorizontal: 15 }} >
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 14 }} >Tenez-moi au courant des autres evenements et des nouvelles de cet organisateur</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Pressable style={{ width: 20, height: 20 }} onPress={() => console.log('press')} >
                        <Checkbox isChecked={true} />
                    </Pressable>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 14 }} >Envoyez-moi des e-mails sur les meilleurs evenements ayant lieu dans mes environs ou en ligne</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10 }} >

                    <View style={{ marginTop: 25, flexDirection: 'row', alignItems: 'center' }} >
                        <Pressable style={{ width: 25, height: 25 }} onPress={() => setConditions(!conditions)} >

                            <Checkbox isChecked={conditions} isPress={() => setConditions(!conditions)} />
                        </Pressable>
                        <Pressable style={{ marginHorizontal: 15 }} onPress={() => setConditions(!conditions)} >
                            <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', fontSize: 14 }} >
                                J'accepte {<Text style={{ color: theme.colors.blue, textDecorationLine: 'underline' }} >les conditions generales</Text>}  du service, {<Text style={{ color: theme.colors.blue, textDecorationLine: 'underline' }} >les règles de la communaute et la Politique de confidentialite</Text>} de Fast.
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }

    const Transaction = () => (
        <View style={{ backgroundColor: theme.colors.grey, width, height: 150, marginBottom: 130 }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15 }} >

                <Icon name={'md-lock-open'} color={'black'} size={18} />
                <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold', marginLeft: 5 }} >
                    Nos transactions sont sûres et sécurisées.
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, paddingBottom: 20 }} >
                <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
                    Fast n'est pas responsable des questions de sante et de securite de cet evenement. Veuillez suivre les politiques de securite de l'organisateur ainsi que les lois et restrictions locales.
                </Text>
            </View>
        </View>
    )


    const ButtomBarSection = () => {
        return (
            <View
                style={{
                    height: 130,
                    width,
                    borderRadius: 10,
                    opacity: 0.9,
                    position: 'absolute',
                    backgroundColor: theme.colors.white,
                    bottom: 0,
                    justifyContent: 'center',
                }}>
                <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <View  >
                        <Icon name={'cart-outline'} color='black' size={20} />
                    </View>
                    <View style={{ backgroundColor: theme.colors.blue, borderRadius: 50, height: 18, width: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10, left: 10 }} >
                        <Text style={{ color: theme.colors.white, fontFamily: 'Nunito-SemiBold', fontSize: theme.sizes.h10 }} >{numTicket}</Text>
                    </View>
                    <View>
                        <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
                            Libre
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginHorizontal: 20,
                    }}>
                    {
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <RNBounceable
                                style={{
                                    borderRadius: 3,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: theme.colors.bluetiful,
                                    width: width / 1.1,
                                    height: 40,
                                    marginBottom: 20
                                }} disabled={!conditions} onPress={handleSubmit(onSubmit)} >
                                {loading == true ? <ActivityIndicator size="small" color="#FFFFFF" animating={loading} hidesWhenStopped={loading} /> : <Text
                                    style={{
                                        color: theme.colors.white,
                                        fontFamily: 'Nunito-Bold',

                                        fontSize: theme.sizes.h6,
                                    }}>
                                    S'inscrire
                                </Text>}
                            </RNBounceable>

                        </View>
                    }
                </View>
            </View>
        );
    };

    return (
        <View style={styles.screen} >
            <Header value={'Commander'} />
            <ScrollView >
                <Coordonnees />
                <Transaction />
            </ScrollView>
            <ButtomBarSection />

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
});

export default Commande;