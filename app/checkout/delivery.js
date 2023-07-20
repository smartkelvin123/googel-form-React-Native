import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Delivery = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>delivery</Text>
      <Link href="/checkout/payment">next</Link>
    </View>
  );
};

export default Delivery;
