import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PersonDetails = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>PersonDetails</Text>
      <Link href="/checkout/delivery">next</Link>
    </View>
  );
};

export default PersonDetails;
