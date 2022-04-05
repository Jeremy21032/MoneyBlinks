import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { ListMovimientos } from "../List/ListMovimientos";
import { Button } from "react-native-elements";
export const Movimientos = ({ navigation }) => {
  const [suma, setSuma] = React.useState();
  const [color, setColor] = React.useState();
  const [size, setSize] = React.useState();
  global.calcularSaldo = () => {
    let totalSaldo = 0;
    for (let i = 0; i < global.transacciones.length; i++) {
      setSize(global.transacciones.length);
      let item = global.transacciones[i];
      if (item.tipo == "E") {
        totalSaldo -= item.monto;
      } else {
        totalSaldo += item.monto;
      }
      if (totalSaldo < 0) {
        setColor("#FF774F");
      } else {
        setColor("#EA8607");
      }
    }

    return totalSaldo;
  };
  React.useEffect(() => {
    setSuma(global.calcularSaldo());
  }, []);

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
        <View style={{ justifyContent: "flex-start" }}>
          <Text Text style={[styles.title, { fontSize: 30 }]}>
            {" "}
            Saldo disponible:{" "}
          </Text>
        </View>
        <View style={{ position: "relative", left: 75 }}>
          <Text style={{ color: color, fontSize: 30, fontWeight: "bold" }}>
            {" "}
            {suma}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
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
        <View style={{position:"relative",right: 55}}>
        <Text style={[styles.title, { fontSize: 30,}]}> Movimientos: </Text>
        </View>
        <View>
        <Text style={{ color: "#ea8a3d", fontSize: 30,}}>
          {size}
        </Text>
        </View>
      </View>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#ea8a3d",
  },
});
