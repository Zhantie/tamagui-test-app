import { View, Text } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Form, H4, SizeTokens, Spinner } from "tamagui";
import { router } from 'expo-router';

export default function LoginCheck(props: { size: SizeTokens }) {
  const [status, setStatus] = useState<"login" | "submitting" | "logged in">(
    "login"
  );


  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => {
        setStatus("logged in");
        router.replace('/(app)/homeScreen');
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status, router]);

  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap={10}
      onSubmit={() => setStatus("submitting")}
      borderRadius={20}
      backgroundColor="lightGray"
      paddingVertical={40}
    >
      <H4>{status[0].toUpperCase() + status.slice(1)}</H4>

      <Form.Trigger asChild>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Login
        </Button>
      </Form.Trigger>
    </Form>
  );
}
