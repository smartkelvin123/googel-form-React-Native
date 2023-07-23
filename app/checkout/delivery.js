import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
} from "react-native-paper";

const Delivery = () => {
  const [shipping, setShipping] = useState("free");
  const router = useRouter();
  const theme = useTheme();

  const nextpage = () => {
    router.push("/checkout/payment");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsHorizontalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"delivery address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="city"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label="postal code"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label="Email"
            placeholder="address"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"shipping option"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            value={shipping}
            onValueChange={(value) => setShipping}
          >
            <RadioButton.Item label="free" value="free" />
            <RadioButton.Item label="free" value="fast" />
            <RadioButton.Item label="same day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextpage}></Button>
    </ScrollView>
  );
};

export default Delivery;
