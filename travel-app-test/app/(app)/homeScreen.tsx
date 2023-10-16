import { View, Text } from "react-native";
import React from "react";
import { CardDemo } from "../../components/card";
import MySafeAreaView from "../../shared/MySafeAreaView";
import { ScrollView } from "tamagui";

const HomeScreen = () => {
  return (
    <View>
      <MySafeAreaView >
        <ScrollView>
          <CardDemo />
        </ScrollView>
      </MySafeAreaView>
    </View>
  );
};

export default HomeScreen;
