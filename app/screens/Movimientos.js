import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { ListMovimientos } from "../List/ListMovimientos";
import { Button } from "react-native-elements";
export const Movimientos = ({navigation}) => {
  const [suma, setSuma] = React.useState();
  let color = "red";
  global.calcularSaldo = () => {
    let totalSaldo = 0;
    for (let i = 0; i < global.transacciones.length; i++) {
      let item = global.transacciones[i];
      if (item.tipo == "E") {
        totalSaldo -= item.monto;
      } else {
        totalSaldo += item.monto;
      }
    }
    validation();
    return totalSaldo;
  };
  React.useEffect(() => {
    setSuma(global.calcularSaldo());
  }, []);
  let validation = () => {
    if (suma < 0) {
      color = "red";
    } else {
      color = "green";
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 40,
          paddingBottom: 5,
          marginBottom: 40,
          borderBottomWidth: 4,
          borderColor: "#ea8a3d",
          backgroundColor: "white",
        }}
      >
        <View style={{ justifyContent: "flex-start", paddingLeft: 30 }}>
          <Text style={styles.title}> Total Saldo: </Text>
        </View>
        <View style={{ position: "relative", left: 100 }}>
          <Text style={{ color: color, fontSize: 30 }}> {suma}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          paddingBottom: 5,
          marginBottom: 10,
          borderColor: "#F5F6FA",
          borderWidth: 4,
          backgroundColor: "white",
          height: 70,
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={styles.title}> Movimientos: </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={global.transacciones}
          style={{ paddingBottom: 30 }}
          renderItem={({ item }) => {
            return <ListMovimientos person={item} />;
          }}
          keyExtractor={(item) => item.id}
        />

        <View>
          <Button
            title="Regresar"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#ea8a3d",
  },
});
