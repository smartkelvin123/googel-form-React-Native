import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Switch,
  Checkbox,
} from "react-native-paper";
import { Link, useRouter } from "expo-router";

const Payment = () => {
  const router = useRouter();
  const theme = useTheme();

  const nextpage = () => {
    router.push("/");
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
            label="card number"
            placeholder="1546 5346 6475 673"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TextInput
              label="security number"
              style={{ backgroundColor: theme.colors.background }}
            />
            <TextInput
              label="security code"
              placeholder="mm/yyyy"
              style={{ backgroundColor: theme.colors.background }}
            />
          </View>
          <View>
            <Switch />
            <Checkbox.Item label="save payment " status="checked" />

            <Text> save payment info</Text>
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextpage}>
        submit
      </Button>
    </ScrollView>
  );
};

export default Payment;
