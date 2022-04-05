import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Button, Icon, Input } from "react-native-elements";
const image =
  "https://media.istockphoto.com/photos/person-holds-a-smartphone-with-mobile-banking-icons-projection-picture-id1304484797?b=1&k=20&m=1304484797&s=170667a&w=0&h=Z8RFNCQoyUz1lXq9eZK55DuwA8TPRcPcIAJDR7HDjpk=";

export const Login = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/adaptive-icon.png")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 2.5,
        }}
        PlaceholderContent={<ActivityIndicator />}
      ></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text h4 style={[styles.title, { fontSize: 25 }]}>
            CORRESPONSAL
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            leftIcon={{ type: "ant-design", name: "user" }}
            placeholder=" Usuario"
            value={email}
            onChangeText={setEmail}
          ></Input>
          <Input
            leftIcon={{ type: "ant-design", name: "lock1" }}
            placeholder=" Contraseña"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          ></Input>
          <Button
            title="Ingresar"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            icon={{
              name: "locked",
              type: "fontisto",
              size: 15,
              color: "white",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
              navigation.navigate("MOV")
            }}
          />
          <View style={{ padding: 20 }}>
            <Text h4 style={[styles.title, { color: "lightgray" }]}>
              ----------- o -----------
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={[styles.title, { color: "#0b57a5" }]}>
              ¿Se te olvidó tu contraseña?
            </Text>
            <Text style={[styles.title, { color: "grey" }]}>
              ¿No tienes una cuenta?{"    "}
              <Text style={[styles.title]}>Registrarse</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFA",
  },
  image: {
    // flex: 1,
    // justifyContent: "center",
  },
  text: {
    color: "white",
    // fontSize: 42,
    // lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#FFFFFA",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  title: {
    fontWeight: "bold",
    color: "#0b57a5",
    alignSelf: "center",
  },
  brandViewText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    opacity: 1,
  },
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});