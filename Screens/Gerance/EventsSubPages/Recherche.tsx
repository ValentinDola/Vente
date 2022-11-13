import {
  View,
  Text,
  useColorScheme,
  Dimensions,
  TextInput,
  ScrollView,
  SectionList,
} from 'react-native';
import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useForm, Controller} from 'react-hook-form';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../Constants/theme';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const Recherche = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const direct = [
    {
      id: 1,
      name: 'Figma Prototypes',
      date: new Date(),
      sold: 3,
      total: 15,
      tab: 'direct',
      price: 0,
      grossSales: 0,
      totalCheckIns: 2,
    },
    {
      id: 2,
      name: 'Basic Coding',
      date: new Date(),
      sold: 6,
      total: 10,
      tab: 'direct',
      price: 10000,
      grossSales: 100000,
      totalCheckIns: 10,
    },
    {
      id: 3,
      name: 'Figma Prototypes',
      date: new Date(),
      sold: 3,
      total: 15,
      tab: 'direct',
      price: 5000,
      grossSales: 100000,
      totalCheckIns: 10,
    },
  ];

  const passé = [
    {
      id: 5,
      name: 'Figma Prototypes',
      date: new Date(),
      sold: 3,
      total: 15,
      tab: 'passé',
      price: 1500,
      grossSales: 100000,
      totalCheckIns: 10,
    },
    {
      id: 6,
      name: 'Basic Coding',
      date: new Date(),
      sold: 6,
      total: 10,
      tab: 'passé',
      price: 0,
      grossSales: 100000,
      totalCheckIns: 10,
    },
  ];

  const brouillon = [
    {
      id: 4,
      name: 'Basic Coding',
      date: new Date(),
      sold: 6,
      total: 10,
      tab: 'brouillon',
      price: 0,
    },
  ];

  const DATA = [
    {
      title: 'Direct',
      data: direct,
    },
    {
      title: 'Passé',
      data: passé,
    },
    {
      title: 'Brouillon',
      data: brouillon,
    },
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const onChangeText = (data: any) => {
    console.log(data.search);
  };

  const Form = () => {
    return (
      <View
        style={{
          width,
          height: 60,
          backgroundColor: isDarkMode ? colors.antiFlashWhite : '#EEEDEA',
          flexDirection: 'row',
          //   justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <RNBounceable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.antiFlashWhite,
              width: 30,
              height: 30,
              borderRadius: 5,
            }}
            onPress={() => navigation.goBack()}>
            <Icon name={'chevron-back'} size={18} color={colors.black} />
          </RNBounceable>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={[
                    {
                      marginHorizontal: 5,
                      backgroundColor: 'transparent',

                      width: width,
                    },
                    {borderColor: error ? '#FF6A61' : '#e8e8e8'},
                  ]}>
                  <TextInput
                    style={[
                      {
                        color: 'black',
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: 16,
                      },
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder={'Commencer la recherche....'}
                    placeholderTextColor={error ? '#FF6A61' : colors.black}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            )}
            name="search"
          />
        </View>
      </View>
    );
  };

  const RenderItem = ({item, index}: any) => (
    <RNBounceable
      style={{
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
      }}
      onPress={() => navigation.navigate('Dashboard', {item})}>
      <AnimatedCircularProgress
        size={50}
        width={3}
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
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Nunito-SemiBold',
            letterSpacing: 1.1,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Nunito-SemiBold',
            letterSpacing: 1.1,
          }}>
          {moment(item?.date).format('LLL')}
        </Text>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Nunito-SemiBold',
            letterSpacing: 1.1,
          }}>
          {item?.sold + '/' + item?.total}
        </Text>
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text
          style={{
            color: colors.black,
            fontFamily: 'Nunito-Bold',
            letterSpacing: 1.1,
          }}>
          {`${item?.price} cfa`}
        </Text>
      </View>
    </RNBounceable>
  );

  return (
    <View
      style={{flex: 1, backgroundColor: isDarkMode ? colors.dark : '#F6F6F7'}}>
      <Form />
      <View
        // showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 10, marginVertical: 10}}>
        <SectionList
          sections={DATA}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({item}) => <RenderItem item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Nunito-SemiBold',
                fontSize: sizes.h6,
              }}>
              {title}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default Recherche;
