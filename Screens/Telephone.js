import React, {Component} from 'react';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {View, SafeAreaView, Button, Text} from 'react-native';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: 'Today',
};

LocaleConfig.defaultLocale = 'en';

const LightTheme = {
  calendarBackground: 'white',
  backgroundColor: 'white',
  selectedDayBackgroundColor: 'rgb(0,183,163)',
  selectedDayTextColor: 'white',
  dotColor: 'purple',
  selectedDotColor: 'white',
  textDisabledColor: 'lightgray',
  dayTextColor: 'black',
  monthTextColor: 'black',
  textSectionTitleColor: 'black',
};

const DarkTheme = {
  calendarBackground: '#2a2a2a',
  backgroundColor: '#2a2a2a',
  selectedDayBackgroundColor: 'brown',
  selectedDayTextColor: 'white',
  dotColor: 'purple',
  selectedDotColor: 'white',
  textDisabledColor: 'gray',
  dayTextColor: 'white',
  monthTextColor: 'white',
  textSectionTitleColor: 'white',
};

export default class caleandarScreen extends Component {
  constructor() {
    super();
    this.state = {
      themeName: 'light',
      // theme:{
      //   calendarBackground:'white',
      //   backgroundColor:'white',
      //   selectedDayBackgroundColor:'red',
      //   selectedDayTextColor:'white',
      //   dotColor:'purple',
      //   selectedDotColor:'white',
      //   textDisabledColor:'lightgray',
      //   dayTextColor:'black'
      // }
    };
  }

  onButtonClick = () => {
    this.setState({
      themeName: this.state.themeName == 'light' ? 'dark' : 'light',
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Button title="Chnage color" onPress={this.onButtonClick} />
        <Agenda
          // The list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key has to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={{
            '2012-05-22': [{name: 'item 1 - any js object'}],
            '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
            '2012-05-24': [],
            '2012-05-25': [
              {name: 'item 3 - any js object'},
              {name: 'any js object'},
            ],
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={month => {
            console.log('trigger items loading');
          }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={calendarOpened => {
            // console.log(calendarOpened);
          }}
          // Callback that gets called on day press
          onDayPress={day => {
            console.log('day pressed');
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            console.log('day changed');
          }}
          // Initially selected day
          selected={'2012-05-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          // renderItem={(item, firstItemInDay) => {
          // return <View><Text>{JSON.stringify(item)}</Text></View>;
          // }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
          // renderDay={(day, item) => {
          // return <View><Text>{JSON.stringify(day)}</Text></View>;
          // }}
          // Specify how empty date content with no items should be rendered
          // renderEmptyDate={() => {
          //   return <View><Text>Empty Date</Text></View>;
          // }}
          // Specify how agenda knob should look like
          // renderKnob={() => {
          //   return <View style={{ width:20, height:10, backgroundColor:'red' }}/>;
          // }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return (
              <View>
                <Text>Empty Data</Text>
              </View>
            );
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          markingType="custom"
          // Hide knob button. Default = false
          // hideKnob={false}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          markedDates={{
            '2012-05-16': {selected: true, marked: true},
            '2012-05-17': {marked: true},
            '2012-05-18': {
              customStyles: {
                container: {
                  backgroundColor: 'gray',
                  borderRadius: 0,
                },
                text: {
                  color: 'white',
                },
              },
            },
          }}
          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
          disabledByDefault={true}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // // Agenda theme
          theme={
            {
              //   ...calendarTheme,
              // calendarBackground:this.state.backgroundColor,
              // backgroundColor:this.state.backgroundColor,
              // agendaDayTextColor: 'yellow',
              // agendaDayNumColor: 'green',
              // agendaTodayColor: 'red',
              // agendaKnobColor: 'blue',
              // dayTextColor:'yellow',
              // todayBackgroundColor:'green'
              // selectedDayBackgroundColor:'red',
              // selectedDayTextColor:'white',
              // dotColor:'yellow',
              // selectedDotColor:'red'
              // "stylesheet.calendar.header":{
              // }
              // "stylesheet.day.basic":{
              //   base:{
              //     borderRadius:0
              //   }
              // }
            }
          }
          theme={{
            ...(this.state.themeName == 'light' ? LightTheme : DarkTheme),
          }}
          Agenda
          container
          style
          style={{}}
        />
      </SafeAreaView>
    );
  }
}
