import React, { useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
// import { events } from '../Constants/dummy-data';
import { theme } from '../Constants/index';
import {
  selectUser,
  setUser,
  selectData,
  setData,
  selectCategories,
  setCategories,
  selectNews,
} from '../Slices/app';

const { width, height } = Dimensions.get('window');

const Explorer: React.FC = ({ navigation }: any) => {

  // useEffect(() => {

  // }, [])

  const user = useSelector(selectUser);
  const event = useSelector(selectData);
  const categories = useSelector(selectCategories);
  const news = useSelector(selectNews);
  const dispatch = useDispatch();

  const renderCategories = ({ item }: any) => (
    <View
      style={{
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.antiFlashWhite,
          borderRadius: 50,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log(`You select ${item.title}`)}>
        <Image source={item.image} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <Text
        style={{
          color: theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          marginVertical: 10,
        }}>
        {item.title}
      </Text>
    </View>
  );

  const renderEvents = ({ item, index }: any) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', { selectedEvent: item })}>
      <View
        style={{
          marginLeft: index === 0 ? 15 : 20,
          marginRight: index === event.length - 1 ? 15 : 0,
        }}>
        <ImageBackground
          source={item.image}
          style={{
            width: width / 2 + 70,
            height: width / 2 + 30,
            justifyContent: 'space-between',
          }}
          imageStyle={{ borderRadius: 5 }}
          resizeMode="cover">
          <View
            style={{
              alignItems: 'flex-end',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: theme.colors.white,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                }}>
                {moment(item.date).format('MMM')}
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: 'Nunito-SemiBold',
                  fontSize: theme.sizes.h3,
                }}>
                {moment(item.date).format('DD')}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, marginBottom: 15 }}>
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
              {item.type}{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                fontSize: theme.sizes.h4,
                color: theme.colors.white,
              }}>
              {' '}
              {item.title}{' '}
            </Text>
          </View>
          {/* </View> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({ item, index }: any) => (
    <View
      style={{
        marginHorizontal: 15,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.white,
          width: width / 1.1,
          height: 70,
          marginTop: 5,
          borderRadius: 3,
          borderLeftColor: item?.color,
          borderLeftWidth: 10,
        }}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            marginHorizontal: 15,
            marginTop: 5,
          }}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const Header = (props: any) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 0.15,
        marginHorizontal: 15,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: theme.colors.blue,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h10,
          }}>
          Autour de toi à
        </Text>
        <Text
          style={{
            color: theme.colors.blue,
            fontFamily: 'Nunito-SemiBold',
            fontSize: theme.sizes.h2,
          }}>
          Baguida
        </Text>
      </View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.bluetiful,
            padding: 6,
            borderRadius: 10,
            opacity: 0.7,
          }}
          onPress={() => navigation.navigate('Recherche')}>
          <Icon
            name="search-outline"
            style={{
              backgroundColor: theme.colors.bluetiful,
              padding: 6,
              borderRadius: 10,
              // opacity: 0.7,
            }}
            size={18}
            color={theme.colors.black}
          />
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.bluetiful,
            padding: 6,
            borderRadius: 10,
            opacity: 0.7,
          }}
          onPress={() => navigation.navigate('Menu')}>
          <Icon
            style={{
              backgroundColor: theme.colors.bluetiful,
              padding: 6,
              borderRadius: 10,
              // opacity: 0.7,
            }}
            name="options-outline"
            size={18}
            color={theme.colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const Categories = () => (
    <View style={{ flex: 0.2 }}>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: theme.colors.blue,
          // color: theme.colors.black,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
        }}>
        {' '}
        Categories{' '}
      </Text>
      <View style={{ marginTop: 10 }} >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCategories}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const EventNearby = () => (
    <View style={{ flex: 0.5 }}>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: theme.colors.blue,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        {' '}
        Evenements{' '}
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event}
          renderItem={renderEvents}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const News = () => (
    <View style={{ flex: 0.15, marginBottom: 50 }}>
      <Text
        style={{
          textDecorationLine: 'line-through',
          color: theme.colors.blue,
          fontFamily: 'Nunito-SemiBold',
          fontSize: theme.sizes.h5,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        {' '}
        Nouvelles{' '}
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={news}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F7' }}>
      <Header user={user} />
      <Categories />
      <EventNearby />
      <News />
    </View>
  );
};

export default Explorer;
