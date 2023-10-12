import { View, Text } from "react-native";
import React from "react";
import { ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Sheet, SheetProps, useSheet } from "@tamagui/sheet";
import { useState } from "react";
import { Button, H1, H2, Input, Paragraph, XStack, YStack } from "tamagui";

const spModes = ["percent", "constant", "fit", "mixed"] as const;

const HomeScreen = () => {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(true);
  const [innerOpen, setInnerOpen] = useState(false);
  const [snapPointsMode, setSnapPointsMode] =
    useState<(typeof spModes)[number]>("percent");
  const [mixedFitDemo, setMixedFitDemo] = useState(false);

  const isPercent = snapPointsMode === "percent";
  const isConstant = snapPointsMode === "constant";
  const isFit = snapPointsMode === "fit";
  const isMixed = snapPointsMode === "mixed";
  const hasFit = isFit || (isMixed && mixedFitDemo);
  const snapPoints = isPercent
    ? [85, 50, 25]
    : isConstant
    ? [256, 190]
    : isFit
    ? undefined
    : mixedFitDemo
    ? ["fit", 110]
    : ["80%", 256, 190];

  return (
    <>
      <YStack space>
        <XStack space $sm={{ flexDirection: "column", alignItems: "center" }}>
          <Button onPress={() => setOpen(true)}>Open</Button>
        </XStack>
      </YStack>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="medium"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        {/* <Sheet.Handle /> */}
        <Sheet.Frame
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Button
            
            size={50}
            circular
            icon={ChevronDown}
            onPress={() => setOpen(false)}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

export default HomeScreen;