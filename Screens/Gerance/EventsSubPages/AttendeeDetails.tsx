import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {colors} from '../../Constants/theme';
import moment from 'moment';
import RNBounceable from '@freakycoder/react-native-bounceable';

const {width, height} = Dimensions.get('screen');

const AttendeeDetails = ({route, navigation}: any) => {
  const [item, setItem] = React.useState(null);
  //   React.useEffect(() => {
  //     let {item} = route.params;
  //     setItem(item);
  //   }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Header
        back={true}
        value={'Détails'}
        backPress={() => navigation.goBack()}
      />
      <View style={{marginHorizontal: 15, marginVertical: 20}}>
        <View>
          <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
            Participant
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-Black',
              color: colors.dark,
              fontSize: 40,
              marginVertical: 5,
            }}>
            {item?.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-SemiBold',
              color: colors.dark,
              fontSize: 18,
              marginVertical: 5,
              textTransform: 'uppercase',
            }}>
            {item?.email}
          </Text>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
              Type de billet
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: colors.dark,
                fontSize: 20,
                marginVertical: 5,
              }}>
              {item?.ticket}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: width / 2}}>
              <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
                Numéro de commande
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: colors.dark,
                  fontSize: 18,
                  marginVertical: 5,
                }}>
                {item?.orderNumber}
              </Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
                Vente
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: colors.dark,
                  fontSize: 18,
                  marginVertical: 5,
                  textTransform: 'uppercase',
                }}>
                {item?.sale}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: width / 2}}>
              <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
                Date
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: colors.dark,
                  fontSize: 18,
                  marginVertical: 5,
                }}>
                {moment(item?.date).format('D MMM YYYY HH:mm')}
              </Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
                Paiement
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  color: colors.dark,
                  fontSize: 18,
                  marginVertical: 5,
                  textTransform: 'uppercase',
                }}>
                {item?.payement}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text style={{fontFamily: 'Nunito-SemiBold', color: '#535353'}}>
              Méthode de livraison
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: colors.dark,
                fontSize: 20,
              }}>
              {`${item?.deliveryMethod} : ${item?.deliveryState}`}
            </Text>
          </View>
        </View>
      </View>

      <RNBounceable
        style={{
          backgroundColor: colors.primary,
          width,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
            color: colors.white,
            fontSize: 18,
          }}>
          L'inscrire
        </Text>
      </RNBounceable>
    </View>
  );
};

export default AttendeeDetails;
