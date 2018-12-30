import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  material,
  robotoWeights,
  materialColors
} from "react-native-typography";

import layoutStyles from "./../../styles/layout";

export default class TimeAndDate extends React.Component {
  render() {
    return (
      <View style={layoutStyles.container}>
        <Text style={styles.time}>{this.props.time}</Text>
        <Text style={styles.date}>{this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  time: {
    ...material.titleObject,
    ...robotoWeights.condensed,
    color: materialColors.whitePrimary,
    fontSize: 80,
    textAlign: "center",
    paddingTop: 110
  },
  date: {
    ...material.titleObject,
    ...robotoWeights.regular,
    color: materialColors.whitePrimary,
    fontSize: 16,
    textAlign: "center",
    marginTop: -5
  }
});
