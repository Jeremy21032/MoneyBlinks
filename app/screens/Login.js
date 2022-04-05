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
} from "react-native";import React from 'react'
import { Button, Input } from "react-native-elements";
const image =
  "https://media.istockphoto.com/photos/person-holds-a-smartphone-with-mobile-banking-icons-projection-picture-id1304484797?b=1&k=20&m=1304484797&s=170667a&w=0&h=Z8RFNCQoyUz1lXq9eZK55DuwA8TPRcPcIAJDR7HDjpk=";

export const Login = ({navigation}) => {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
    return (
        <ScrollView style={styles.container}>
          <ImageBackground
            source={{ uri: image }}
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height / 2.5,
            }}
            PlaceholderContent={<ActivityIndicator />}
          >
            <View style={styles.brandView}>
              <Text style={styles.brandViewText}>MONEY BLINKS</Text>
            </View>
          </ImageBackground>
          <View style={styles.bottomView}>
            <View style={{ padding: 40 }}>
              <Text h4 style={styles.title}>
                BIENVENIDO
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
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              ></Input>
              <Input
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
              ></Input>
              <Button
                title="Ingresar"
                buttonStyle={{
                  backgroundColor: "#49D35C",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 50,
                }}
                onPress={() => {
                  navigation.navigate("MOV")
                }}
              />
            </View>
          </View>
        </ScrollView>
      );
}

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
    fontSize: 25,
    fontWeight: "bold",
    color: "#0B2460",
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
