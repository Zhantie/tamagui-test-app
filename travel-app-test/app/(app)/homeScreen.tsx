import { View, Text } from "react-native";
import React from "react";
import { Avatar, XStack } from "tamagui";
import { CardDemo } from "../../components/card";
import MySafeAreaView from "../../shared/MySafeAreaView";

const HomeScreen = () => {
  return (
    <MySafeAreaView style={{height:"100%"}}>
      <View>
        <CardDemo />
      </View>
    </MySafeAreaView>
  );
};

export default HomeScreen;
