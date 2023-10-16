import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { TamaguiProvider, Button } from "tamagui";
import config from "../tamagui.config";
import HomeScreen from "./(app)/startScreen";
import MySafeAreaView from "../shared/MySafeAreaView";

const Index = () => {
  return (
    <View style={styles.backGround}>
      <TamaguiProvider config={config}>
        <MySafeAreaView edges={["bottom"]} style={styles.fullSceen}>
          <HomeScreen />
        </MySafeAreaView>
      </TamaguiProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "blue",
  },
  fullSceen: {
    height: "100%",
    backgroundColor: "blue",
  },
});

export default Index;
