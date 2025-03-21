import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Camera from "../screens/Camera";
import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Camera,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-camera" color={tintColor} size={28} />
            <Text style={{ color: tintColor }} />
          </View>
        ),
      },
    },
    Profile: {
      screen: Chats,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            {/* {<Icon name="ios-person" color={tintColor} size={22} />} */}
            <Text style={{ color: tintColor }}>CHATS</Text>
          </View>
        ),
      },
    },
    Settings: {
      screen: Status,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            {/* <Icon name="ios-settings" color={tintColor} size={22} /> */}
            <Text style={{ color: tintColor }}>STATUS</Text>
          </View>
        ),
      },
    },
    Sett: {
      screen: Calls,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            {/* <Icon name="ios-search" color={tintColor} size={22} /> */}
            <Text style={{ color: tintColor }}>CALLS</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    lazyLoad: true,
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: "#40404c",
        // paddingBottom: 4,
        // paddingTop: 1,
      },
      indicatorStyle: {
        backgroundColor: "#fff",
        elevation: 0,
        height: 4,
      },
      activeTintColor: "#fff",
      inactiveTintColor: "gray",
    },
  }
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: "WhatsApp",
      headerStyle: {
        backgroundColor: "#2b2b39",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            width: 70,
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Icon name="ios-search" color={"white"} size={28} />
          <MCIcons name="dots-vertical" color={"white"} size={28} />
        </View>
      ),
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
