import { StyleSheet, View } from "react-native";
import React from "react";
import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Sheet, SheetProps, useSheet } from "@tamagui/sheet";
import { useState } from "react";
import { Button, H1, H2, Input, Paragraph, XStack, YStack } from "tamagui";
import LoginComponent from "../../components/loginInput";
import LoginCheck from "../../components/loginCheck";
import MySafeAreaView from "../../shared/MySafeAreaView";

const spModes = ["percent", "constant", "fit", "mixed"] as const;

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [modal] = useState(true);

  const [snapPointsMode] = useState<(typeof spModes)[number]>("percent");

  return (
    <View style={styles.fullscreen}>
      <Sheet
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          animation="medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame alignItems="center">
          <View style={styles.inputContainer}>
            <LoginComponent username={""} password={""} />
            <LoginCheck size={12} />
          </View>
        </Sheet.Frame>
      </Sheet>
      <YStack style={{ justifyContent: "center", alignItems: "center", backgroundColor: "green"  }}>
        <XStack>
          <H1>Travee</H1>
        </XStack>
        <XStack>
          <Button onPress={() => setOpen(true)}>Start</Button>
        </XStack>
      </YStack>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 35,
  },
  fullscreen: {
    height: "100%",
  },
});

export default HomeScreen;
