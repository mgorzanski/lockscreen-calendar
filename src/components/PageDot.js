import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { materialColors } from "react-native-typography";

export default class PageDot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive
    };
  }
  render() {
    return (
      <TouchableHighlight>
        <View style={this.state.isActive ? styles.dotActive : styles.dot} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: materialColors.whitePrimary,
    width: 14,
    height: 14,
    borderRadius: 100
  },
  dotActive: {
    backgroundColor: "#7E7E7E",
    width: 14,
    height: 14,
    borderRadius: 100
  }
});
