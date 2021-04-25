import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Status extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Status Page</Text>
      </View>
    );
  }
}

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
