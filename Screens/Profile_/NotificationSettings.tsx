import {View, Text, StyleSheet, Switch, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import {theme} from '../../Constants';

const NotificationSettings = () => {
  const [on, setOn] = useState(true);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);
  const [six, setSix] = useState(true);

  const toggleOnSwitch = () => setOn(!on);
  const toggleOneSwitch = () => setOne(!one);
  const toggleTwoSwitch = () => setTwo(!two);
  const toggleThreeSwitch = () => setThree(!three);
  const toggleFourSwitch = () => setFour(!four);
  const toggleFiveSwitch = () => setFive(!five);
  const toggleSixSwitch = () => setSix(!six);

  const Switch_ = () => (
    <View
      style={{
        marginVertical: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h5,
          }}>
          {on ? 'On' : 'Off'}
        </Text>
      </View>
      <Switch
        value={on}
        onValueChange={toggleOnSwitch}
        trackColor={{false: '#767577', true: theme.colors.bluetiful}}
        thumbColor={on ? theme.colors.blue : '#f4f3f4'}
      />
    </View>
  );

  const Options = () => (
    <View style={{marginVertical: 10, marginHorizontal: 25}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Billets achetés
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Sachez quand les billets sont livrés et que votre événement est sur
            le point de commencer.
          </Text>
        </View>
        <Switch
          value={one}
          onValueChange={toggleOneSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={one ? theme.colors.blue : '#f4f3f4'}
        />
      </View>

      {/* Second */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Événements aimés
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Recevez des alertes lorsque vos événements préférés se produisent
            bientôt.
          </Text>
        </View>
        <Switch
          value={two}
          onValueChange={toggleTwoSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={two ? theme.colors.blue : '#f4f3f4'}
        />
      </View>

      {/* Third */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Organisateurs suivis
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Soyez averti lorsque vos organisateurs favoris créent de nouveaux
            événements.
          </Text>
        </View>
        <Switch
          value={three}
          onValueChange={toggleThreeSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={three ? theme.colors.blue : '#f4f3f4'}
        />
      </View>

      {/* Fourth */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Rappels
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Autoriser les rappels définis lorsque les événements sont mis en
            vente.
          </Text>
        </View>
        <Switch
          value={four}
          onValueChange={toggleFourSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={four ? theme.colors.blue : '#f4f3f4'}
        />
      </View>

      {/* Fifth */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Collections suivies
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Sachez quand des événements sont ajoutés aux collections que vous
            suivez.
          </Text>
        </View>
        <Switch
          value={five}
          onValueChange={toggleFiveSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={five ? theme.colors.blue : '#f4f3f4'}
        />
      </View>

      {/* Sixth */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
            }}>
            Recommandations
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Nunito-SemiBold',
              fontSize: theme.sizes.h7,
              marginTop: 5,
            }}>
            Obtenez des événements recommandés en fonction de vos centres
            d'intérêt et de votre emplacement.
          </Text>
        </View>
        <Switch
          value={six}
          onValueChange={toggleSixSwitch}
          trackColor={{false: '#767577', true: theme.colors.bluetiful}}
          thumbColor={six ? theme.colors.blue : '#f4f3f4'}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Header value={'Notification Push'} />
      <Switch_ />
      <ScrollView>{on ? <Options /> : <View />}</ScrollView>
    </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});
