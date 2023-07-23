import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { Button, Card, TextInput, useTheme } from "react-native-paper";

const PersonDetails = () => {
  const router = useRouter();
  const theme = useTheme();

  const nextpage = () => {
    router.push("/checkout/delivery");
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
        <Card.Title title="personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="name"
            placeholder="name"
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label="Email"
            placeholder="hey@gmail.com"
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextpage}></Button>
    </ScrollView>
  );
};

export default PersonDetails;
