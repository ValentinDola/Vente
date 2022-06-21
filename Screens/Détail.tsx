/**
 *  - Event Detail Screnn
 * -> The screen can be seperated 4 sections
 *
 * TODO:
 * [] Build the header image background section
 *    [] Rendering the image background sub section (ImageBackground)
 *    [] Rendering the header sub section
 *    [] Rendering the footer sub section (LinearGradient)
 * [] Build the buttons group section
 * [] Build the description section
 * [] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  LinearGradient,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {events} from '../Constants/dummy-data';
import {theme} from '../Constants/index';

const {width, height} = Dimensions.get('window');

const Detail = ({navigation, route}: any) => {
  const [selectedEvent, setSelectedEvent]: any = useState(null);

  useEffect(() => {
    let {selectedEvent} = route.params;
    setSelectedEvent(selectedEvent);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#F6F6F7'}}
        style={{backgroundColor: '#F6F6F7'}}>
        {/* ImageBackground */}
        <ImageBackground
          source={selectedEvent?.image}
          style={{width: '100%', height: height / 2}}>
          {/* Image Header */}
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: Platform.OS === 'ios' ? 30 : 20,
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: theme.colors.grey,
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  opacity: 0.7,
                }}>
                <TouchableOpacity onPress={() => console.log('You like it')}>
                  <Icon
                    name="ios-heart-outline"
                    size={24}
                    color={theme.colors.black}
                  />
                </TouchableOpacity>
                <View style={{width: 15}} />
                <TouchableOpacity onPress={() => console.log('Share it')}>
                  <Icon
                    name="ios-share-outline"
                    size={24}
                    color={theme.colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Image footer */}
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              position: 'relative',
              zIndex: -1,
            }}>
            {/* <LinearGradient
              color={['transparent', '#000']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 1}}
              style={{width, height: height / 2}}></LinearGradient> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0px 30px',
              }}>
              <View>
                <Text>{selectedEvent?.type}</Text>
                <Text>{selectedEvent?.title}</Text>
                <Text>{selectedEvent?.startTime}</Text>
              </View>
            </View>
            {/* <View style={{marginLeft: 10, marginBottom: 15}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Nunito-SemiBold',
                  opacity: 0.6,
                  marginVertical: 10,
                  fontSize: theme.sizes.h5,
                  color: theme.colors.white,
                }}>
                {' '}
                {selectedEvent?.type}{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h4,
                  color: theme.colors.white,
                }}>
                {' '}
                {selectedEvent?.title}{' '}
              </Text>
            </View> */}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F7',
  },
});

export default Detail;
