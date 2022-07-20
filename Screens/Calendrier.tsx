import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { theme } from '../Constants/index';
import { Event } from '../Constants/dummy-data';
import { selectData, setData } from '../Slices/app';
import { useSelector, useDispatch } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import { format } from 'date-fns';

const { height } = Dimensions.get('screen');

const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calendrier: React.FC = ({ navigation }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const mappedData = Event.map(
      (event: { date: string | number | Date }, index: any) => {
        const date = event.date;

        return {
          ...event,
          date,
        };
      },
    );

    const reduced = mappedData.reduce(
      (acc: any, currentItem: { [x: string]: any; date: any }) => {
        const { date, ...coolItem } = currentItem;

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(coolItem);

        return acc;
      },
      {},
    );

    setItems(reduced);
  }, [Event]);



  const renderItem = (item: any) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail', { selectedEvent: item })} >
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
        {item.title}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
        {item.type}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
        {item.location}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
        {item.price}
      </Text>
      {item.promotion.state === true ? (
        <Text
          style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }}>
          {item.promotion.detail}
        </Text>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F7' }}>
      <Agenda
        items={items}
        renderItem={renderItem}
        selected={'2020-01-21'}
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
          agendaDayTextColor: theme.colors.bluetiful,
          agendaDayNumColor: theme.colors.bluetiful,
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
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default Calendrier;
