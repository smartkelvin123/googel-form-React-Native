import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Delivery from "./delivery";

const CheckoutStack = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          padding: 15,
          backgroundColor: "#f0eBF8",
          flex: 1,
        },
        headerStyle: {
          backgroundColor: "#673ab8",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "#f0ebf8",
      }}
    >
      <Stack.Screen name="index" options={{ title: "personal information" }} />
      <Stack.Screen
        name="delivery"
        options={{ title: "delivery information" }}
      />
      <Stack.Screen name="payment" options={{ title: "payment information" }} />
    </Stack>
  );
};

export default CheckoutStack;
