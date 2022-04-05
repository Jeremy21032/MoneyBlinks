import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {Login} from './app/screens/Login'
import {VerifyInformation} from './app/screens/VerifyInformation';

const StackNav = createStackNavigator();

function LoginNav() {
  return (
    <StackNav.Navigator initialRouteName="LOGIN">
      <StackNav.Screen
        name="LOGIN"
        component={Login}
        options={{ headerShown: false }}
      ></StackNav.Screen>
          <StackNav.Screen
        name="VERIFICAR"
        component={VerifyInformation}
        options={{ headerShown: false }}
      ></StackNav.Screen>
    </StackNav.Navigator>
  );
}


global.transacciones=[
	{ monto:100.0, tipo: "E", fecha: "05/04/2022", hora: "09:23", codigo:"ABCDS", nombre: "Juan Perez", id: "1714616123" },
	{ monto:50.0, tipo: "R", fecha: "05/04/2022", hora: "12:45", codigo:"VFSSS", nombre: "Ricardo Lopez", id: "174223423" },
	{ monto:40.0, tipo: "E", fecha: "05/04/2022", hora: "13:45", codigo:"CDASF", nombre: "Rosa Beltrán", id: "0976123123" },
]

export default function App() {
  return (
   <NavigationContainer>
     <LoginNav/>
   </NavigationContainer>
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
