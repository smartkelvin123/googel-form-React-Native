import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  HelperText,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoSchema, PersonalInfo } from "../../src/schema/checkout";
import ControlledInput from "../../src/components/ControlledInput";

const PersonDetails = () => {
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const { setPersonal } = useCheckoutContext();

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);

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
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@gmail.com"
            label="Email"
          />

          <ControlledInput
            control={control}
            name="password"
            label="Password"
            // secureTextEntry
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            label="ConfirmPassword"
            // secureTextEntry
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
};
export default PersonDetails;
