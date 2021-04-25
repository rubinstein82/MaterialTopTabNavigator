import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Sett extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Sett Page</Text>
      </View>
    );
  }
}

export default Sett;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
