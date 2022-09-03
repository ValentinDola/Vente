import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {theme} from '../Constants/index';
import {Event} from '../Constants/dummy-data';
import {selectData, setData} from '../Slices/data';
import {useSelector, useDispatch} from 'react-redux';
import {Agenda} from 'react-native-calendars';
import {format} from 'date-fns';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const Calendrier: React.FC = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState({});

  const data = useSelector(selectData);

  useEffect(() => {
    const mappedData = data.map(
      (event: {startDate: string | number | Date}, index: any) => {
        const date = moment(event.startDate).format('YYYY-MM-DD');

        return {
          ...event,
          date,
        };
      },
    );

    const reduced = mappedData.reduce(
      (acc: any, currentItem: {[x: string]: any; date: any}) => {
        const {date, ...coolItem} = currentItem;

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(coolItem);

        return acc;
      },
      {},
    );

    setItems(reduced);
    console.log(reduced);
  }, [Event]);

  const renderItem = (item: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', {selectedEvent: item})}>
      <View style={{width: width / 2.1}}>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            textTransform: 'uppercase',
            letterSpacing: 1.2,
          }}>
          {item?.name}
        </Text>

        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            letterSpacing: 1.2,
            marginVertical: 3,
          }}>
          {item?.location?.address?.addressLocality}
        </Text>
        <Text
          style={{
            color: theme.colors.black,
            fontFamily: 'Nunito-SemiBold',
            letterSpacing: 1.2,
          }}>
          {moment(item?.startDate).format('HH:mm')} -{' '}
          {moment(item?.endDate).format('HH:mm')}
        </Text>
      </View>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#B5FBDD',
              height: 25,
              width: 85,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              borderRadius: 3,
            }}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 2,
              }}>
              {item?.eventStatus}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#F7F272',
              height: 25,
              width: 75,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
            }}>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
                textTransform: 'uppercase',
                fontSize: 12,
              }}>
              {item?.eventAttendanceMode}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <Agenda
        items={items}
        renderItem={renderItem}
        renderEmptyDate={() => (
          <View>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Empty
            </Text>
          </View>
        )}
        onDayChange={day => {
          console.log('day changed', day);
        }}
        theme={{
          agendaKnobColor: theme.colors.bluetiful,
          foregroundColor: theme.colors.bluetiful,
          dotColor: theme.colors.blue,
          textDayFontFamily: 'Nunito-SemiBold',
          textMonthFontFamily: 'Nunito-SemiBold',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 20,
    marginRight: 10,
    marginTop: 15,
  },
});

export default Calendrier;
