import { View, Text } from "react-native";
import React from "react";
import { CardDemo } from "../../components/card";
import MySafeAreaView from "../../shared/MySafeAreaView";
import { ScrollView } from "tamagui";

const HomeScreen = () => {
  return (
    <MySafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </ScrollView>
    </MySafeAreaView>
  );
};

export default HomeScreen;
