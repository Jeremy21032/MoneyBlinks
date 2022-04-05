import { StyleSheet, Text, View, FlatList} from "react-native";
import React from "react";
import { ListMovimientos } from "../List/ListMovimientos";
export const Movimientos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movimientos</Text>
      <FlatList
        data={global.transacciones}
        style={{ paddingBottom: 25 }}
        renderItem={({ item }) => {
          return <ListMovimientos person={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
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
