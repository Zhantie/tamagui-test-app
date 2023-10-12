import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TamaguiProvider, Button } from "tamagui";
import config from "../tamagui.config";
import HomeScreen from "./homeScreen";



const Index = () => {
  return (
    <TamaguiProvider config={config}>
        <HomeScreen />
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
   
});

export default Index;
