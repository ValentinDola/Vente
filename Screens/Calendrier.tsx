import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../Constants/index';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';

const Calendrier = () => {
  const [items, setItems] = useState({});

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const FullAgenda = () => {
    const loadItems = (day: DateData) => {
      const items = items || {};

      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);

          if (!items[strTime]) {
            items[strTime] = [];

            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
                day: strTime,
              });
            }
          }
        }

        const newItems: AgendaSchedule = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
    };

    const renderItem = items => {
      return (
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => Alert.alert(items.name)}>
          <Text style={{fontFamily: 'Nunito-SemiBold'}}>{items.name}</Text>
        </TouchableOpacity>
      );
    };

    const renderEmptyDate = () => {
      return (
        <View style={styles.emptyDate}>
          <Text>This is empty date!</Text>
        </View>
      );
    };
    return (
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2018-05-20'}
        renderItem={renderItem}
        // renderEmptyData={renderEmptyDate}
        style={{}}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F7'}}>
      <FullAgenda />
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
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default Calendrier;
