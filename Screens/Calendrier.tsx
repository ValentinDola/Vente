import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { theme } from '../Constants/index';
import { Event } from '../Constants/dummy-data';
import { selectData, setData } from '../Slices/app';
import { useSelector, useDispatch } from 'react-redux';
import {
  Agenda
} from 'react-native-calendars';
import { format } from 'date-fns';

const { height } = Dimensions.get('screen');

const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const Calendrier: React.FC = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const mappedData = Event.map((event: { date: any }, index: any) => {

      const date = event.date;

      return {
        ...event,
        date
      }
    });

    const reduced = mappedData.reduce((acc: any, currentItem: { [x: string]: any; date: any; }) => {
      const { date, ...coolItem } = currentItem;

      acc[date] = [coolItem];

      return acc;
    }, {})

    setItems(reduced);
  }, [Event])






  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: `Items for ${strTime} # ${j}`,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });

          }
        }

      }

      const navItems = {};
      Object.keys(items).forEach((key) => {
        navItems[key] = items[key];
      });
      setItems(navItems);
    }, 1000);
  };

  const renderItem = (item) => (
    <TouchableOpacity style={styles.item}>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
        {item.title}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
        {item.type}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
        {item.location}
      </Text>
      <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
        {item.price}
      </Text>
      {item.promotion.state === true ? <Text style={{ color: theme.colors.black, fontFamily: 'Nunito-SemiBold' }} >
        {item.promotion.detail}
      </Text> : null}
    </TouchableOpacity>
  )



  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F7' }}>
      <Agenda items={items}
        renderItem={renderItem} selected={'2020-01-21'} />
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
