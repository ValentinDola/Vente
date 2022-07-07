import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { theme } from '../Constants/index';
import { selectData, setData } from '../Slices/app';
import { useSelector, useDispatch } from 'react-redux';
import {
  Agenda, AgendaEntry,
} from 'react-native-calendars';

const { height } = Dimensions.get('screen');

type Item = {
  name: string,
  cookies?: boolean,
}

const Calendrier: React.FC = () => {

  const [items, setItems] = useState<{ [date: string]: AgendaEntry[] }>({
    '2022/07/07': [{ name: 'white', height: 100, day: '2022/07/07' }],
    '2020/07/07': [{ name: 'black', height: 100, day: '2022/07/07' }],
  });

  const events = useSelector(selectData);


  const renderItem = (item: AgendaEntry) => {
    return (
      <View style={styles.item} >
        <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
          {item.name}
        </Text>
        <Text style={{ color: theme.colors.blue, fontFamily: 'Nunito-SemiBold' }}>
          {item.height ? 'oui' : 'non'}
        </Text>
      </View>
    )
  }




  return (
    <View style={{ flex: 1, backgroundColor: '#F6F6F7' }}>
      <Agenda
        items={items}
        renderItem={renderItem}
        displayLoadingIndicator={false}

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
