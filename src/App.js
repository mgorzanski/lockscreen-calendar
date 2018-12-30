import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

import CalendarScreen from './screens/Calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreenId: 1,
      newNotificationsArrived: false
    };
  }

  render() {
    return (
      <LinearGradient colors={['#FF9100', '#FFA726']} style={styles.linearGradient}>
        { this.state.currentScreenId === 1 ? (<CalendarScreen />) : null }
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});