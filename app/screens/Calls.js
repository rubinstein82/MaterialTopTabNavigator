import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Calls extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Calls Page</Text>
      </View>
    );
  }
}

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
