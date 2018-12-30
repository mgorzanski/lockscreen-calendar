import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View } from "react-native";

import CalendarScreen from "./screens/Calendar";
import PageDot from "./components/PageDot";
import layout from "./styles/layout";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreenId: 1,
      newNotificationsArrived: false,
      currentTime: this.getCurrentTime(),
      currentDate: this.getCurrentDate()
    };
  }

  getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + String(minutes);
    return hours + ":" + minutes;
  };

  getCurrentDate = () => {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      days[date.getDay()] +
      ", " +
      months[date.getMonth()] +
      " " +
      date.getDate()
    );
  };

  render() {
    return (
      <LinearGradient
        colors={["#FF9100", "#FFA726"]}
        style={styles.linearGradient}
      >
        <View>
          {this.state.currentScreenId === 1 ? (
            <CalendarScreen
              time={this.state.currentTime}
              date={this.state.currentDate}
            />
          ) : null}
        </View>
        <View style={styles.pages}>
          <PageDot />
          <View style={layout.divider5} />
          <PageDot isActive="true" />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between"
  },
  pages: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 35
  }
});
