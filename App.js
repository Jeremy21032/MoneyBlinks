import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


global.transacciones=[
	{ monto:100.0, tipo: "E", fecha: "05/04/2022", hora: "09:23", codigo:"ABCDS", nombre: "Juan Perez", id: "1714616123" },
	{ monto:50.0, tipo: "R", fecha: "05/04/2022", hora: "12:45", codigo:"VFSSS", nombre: "Ricardo Lopez", id: "174223423" },
	{ monto:40.0, tipo: "E", fecha: "05/04/2022", hora: "13:45", codigo:"CDASF", nombre: "Rosa Beltrán", id: "0976123123" },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
