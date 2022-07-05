import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { theme } from '../Constants/index';
import { selectData, setData } from '../Slices/app';
import { useSelector, useDispatch } from 'react-redux';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';

const { height } = Dimensions.get('screen');

type Item = {
  name: string,
  cookies?: boolean,
}

const Calendrier = () => {

  const events = useSelector(selectData);
  const [items, setItems] = useState<AgendaSchedule>({
    '2022/07/03': [{ name: 'white', height: height, day: '2022/07/03' }],
    '2020/07/02': [{ name: 'black', height: height, day: '2020/07/02' }],
  });




  const renderItem = (item: Item) => {
    return (
      <View style={styles.item} >
        <Text>
          {item.name}
        </Text>
      </View>
    )
  }




  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F7' }}>
      <Agenda
        items={items}
        renderItem={renderItem}
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
