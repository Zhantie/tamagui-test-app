import { View, Text } from "react-native";
import React from "react";

import { useEffect, useState } from "react";
import { Button, Form, H4, SizeTokens, Spinner } from "tamagui";

export default function LoginCheck(props: { size: SizeTokens }) {
  const [status, setStatus] = useState<"login" | "submitting" | "submitted">(
    "login"
  );

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("login"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
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