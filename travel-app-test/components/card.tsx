import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  CardProps,
  H2,
  Image,
  Paragraph,
  ScrollView,
  XStack,
  YStack,
} from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export function CardDemo() {
  return (
    <YStack style={{ padding: 15 }} space>
      <DemoCard height={400} />
    </YStack>
  );
}

export function DemoCard(props: CardProps) {
  return (
    <Card justifyContent="center" alignItems="center" bordered {...props}>
      <Card.Header flexDirection="row" padded>
        <Avatar size={100} borderRadius={50}>
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
        </Avatar>
        <View>
          <H2>Sony A7IV</H2>
          <Paragraph>Now available</Paragraph>
        </View>
      </Card.Header>

      <Card.Footer padded>
        <View style={styles.reactContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Ionicons
              style={{ paddingRight: 8, color: "#24B24C" }}
              name="star"
              size={17}
            />
            <Text style={{ color: "#24B24C" }}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.commentButton}>
            <Text>Comment</Text>
          </TouchableOpacity>
        </View>
      </Card.Footer>
    </Card>
  );
}

const styles = StyleSheet.create({
  reactContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 25,
    paddingHorizontal: 10,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DAFEE4",
    paddingHorizontal: 50,
    height: 40,
    borderRadius: 25,
  },
  commentButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E8EC",
    paddingHorizontal: 50,
    height: 40,
    borderRadius: 25,
  },
});
