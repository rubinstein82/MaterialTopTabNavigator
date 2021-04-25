import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Sett from "../screens/Settings";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-home" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Home</Text>
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-person" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Profile</Text>
          </View>
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-settings" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Settings</Text>
          </View>
        ),
      },
    },
    Sett: {
      screen: Sett,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-search" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Sett</Text>
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
        height: 70,
        backgroundColor: "#40404c",
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: "#fff",
        elevation: 0,
        height: 5,
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
