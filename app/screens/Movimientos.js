import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Movimientos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movimientos</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    paddingTop: 50,
    fontSize: 50,
  },
});
