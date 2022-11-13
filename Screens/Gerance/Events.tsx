import {
  View,
  Text,
  ActivityIndicator,
  SectionList,
  Dimensions,
} from 'react-native';
import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {Icon} from 'react-native-vector-icons/Icon';
import GHeader from '../../Components/GHeader';
import {data} from '../../Constants/dummy-data';
import {colors, sizes} from '../../Constants/theme';
import moment from 'moment';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const {width, height} = Dimensions.get('screen');

const Events = ({navigation}: any) => {
  const [loading, setLoading] = React.useState(true);

  const direct = [
    {
      id: 1,
      name: 'Figma Prototypes',
      date: new Date().toUTCString(),
      sold: 3,
      total: 15,
      tab: 'direct',
      price: 0,
      grossSales: 0,
      totalCheckIns: 2,
      image: require('../assets/images/N_Data/4th-Of-July-Invitation.jpg'),
    },
    {
      id: 2,
      name: 'Basic Coding',
      date: new Date().toUTCString(),
      sold: 6,
      total: 10,
      tab: 'direct',
      price: 10000,
      grossSales: 100000,
      totalCheckIns: 10,
      image: require('../assets/images/N_Data/4th-Of-July-Invitation.jpg'),
    },
    {
      id: 3,
      name: 'Figma Prototypes',
      date: new Date().toUTCString(),
      sold: 3,
      total: 15,
      tab: 'direct',
      price: 5000,
      grossSales: 100000,
      totalCheckIns: 10,
      image: require('../assets/images/N_Data/4th-Of-July-Invitation.jpg'),
    },
  ];

  const DATA = [{data: direct}];

  const RenderItem = ({item, index}: any) => (
    <RNBounceable
      style={{
        marginHorizontal: 5,
        marginVertical: 15,
        flexDirection: 'row',
        width,
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('Dashboard', {item: item})}>
      <AnimatedCircularProgress
        size={50}
        width={5}
        fill={(item?.sold / item?.total) * 100}
        tintColor="#35D073"
        backgroundColor="#E6E7E8">
        {() => (
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-SemiBold',
            }}>
            {(item?.sold / item?.total) * 100}%
          </Text>
        )}
      </AnimatedCircularProgress>
      <View style={{marginLeft: 20}}>
        <View style={{width: 180}}>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: sizes.h6,
            }}>
            {item?.name}
          </Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: sizes.h8,
            }}>
            {moment(item?.date).format('ddd D/MM/YY HH:mm')}
          </Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Nunito-SemiBold',
              fontSize: sizes.h8,
            }}>
            {item?.sold + '/' + item?.total}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Nunito-SemiBold',
            fontSize: sizes.h8,
          }}>
          {`${item?.price} cfa`}
        </Text>
      </View>
    </RNBounceable>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <GHeader
        value={'Evénements'}
        menu={true}
        onPress={() => navigation.openDrawer()}
      />
      {loading === true ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            size="small"
            color={colors.dark}
            animating={loading}
            hidesWhenStopped={loading}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          {/* <TabRendering /> */}
          <View
            // showsVerticalScrollIndicator={false}
            style={{marginHorizontal: 10, marginVertical: 10}}>
            <SectionList
              sections={data}
              keyExtractor={(item: any, index: any) => item + index}
              renderItem={({item}) => <RenderItem item={item} />}
            />
          </View>
          <View style={{position: 'absolute', bottom: 30, right: 30}}>
            <RNBounceable
              style={{
                backgroundColor: colors.dark,
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <Icon name={'md-add-outline'} size={25} color={colors.white} />
            </RNBounceable>
          </View>
        </View>
      )}
    </View>
  );
};

export default Events;
