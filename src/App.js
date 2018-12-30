import React from 'react';

import CalendarScreen from './screens/Calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreenId: 1
    };
  }

  render() {
    return (
      { this.state.currentScreenId === 1 ? (<CalendarScreen />) : null}
    );
  }
}