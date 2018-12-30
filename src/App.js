import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

import CalendarScreen from './screens/Calendar';
import PageDot from './components/PageDot';
import layout from './styles/layout';

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
        <View>
          { this.state.currentScreenId === 1 ? (<CalendarScreen />) : null }
        </View>
        <View style={styles.pages}>
          <PageDot />
          <View style={layout.divider5}></View>
          <PageDot isActive="true" />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  },
  pages: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35
  }
});