import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const index = () => {
  // return <Redirect href={"/checkout"} />;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is your app</Text>
        <Link href={"/checkout"} style={styles.subtitle}>
          checkout
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: "auto", // This will center the content horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
});

export default index;
