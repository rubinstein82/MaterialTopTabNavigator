import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Camera extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Camera Page</Text>
      </View>
    );
  }
}

export default Camera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
