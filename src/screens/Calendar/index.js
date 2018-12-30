import React from "react";
import { View, Text } from "react-native";

import TimeAndDate from "./TimeAndDate";

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <View>
        <TimeAndDate time={this.props.time} date={this.props.date} />
      </View>
    );
  }
}
