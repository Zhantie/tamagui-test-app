import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TamaguiProvider, Button } from "tamagui";
import config from "../tamagui.config";
import HomeScreen from "./startScreen";
import MySafeAreaView from "../shared/MySafeAreaView";

const Index = () => {
  return (
    <MySafeAreaView edges={["top"]} style={styles.fullSceen} >
      <TamaguiProvider config={config}>
        <HomeScreen />
      </TamaguiProvider>
    </MySafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullSceen: {
    height: "100%",
    backgroundColor: "green",
  },
});

export default Index;
