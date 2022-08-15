import {View, Text, TouchableHighlight, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-modern-datepicker';

const DateTimePicker = props => {
  const {iconName, iconSize, iconColor, textStyle, inputStyle, mode} = props;

  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Pressable
      style={inputStyle}
      onPress={() => console.log('open date picker')}>
      <Text style={textStyle}>{moment(date).format('YYYY-MM-DD')}</Text>
      <Icon name={iconName} size={iconSize} color={iconColor} />

      <Modal
        transparent={true}
        animationType={'slide'}
        visible={true}
        supportedOrientations={['portrait']}
        onRequestClose={() => setShow(false)}>
        <View style={{flex: 1}}>
          <TouchableHighlight
            style={{
              flex: 1,
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}
            activeOpacity={1}
            visible={show}
            onPress={() => setShow(false)}>
            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={{flex: 1, borderTopColor: '#E9E9E9', borderTopWidth: 1}}
              onPress={() => console.log('date picker clicked')}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  height: 256,
                  overflow: 'hidden',
                }}>
                <View style={{marginTop: 20}}>
                  <DatePicker
                    mode={mode}
                    onSelectedChange={date => setSelectedDate(date)}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </TouchableHighlight>
        </View>
      </Modal>
    </Pressable>
  );
};

DateTimePicker.defaultProps = {};

export default DateTimePicker;
