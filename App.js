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
export default function App() {
  return (
    <NavigationContainer>
      <LoginNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
