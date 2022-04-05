import React from "react";
import { StyleSheet, View, Alert, Dimensions } from "react-native";
import { Button, Text,Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export const VerifyInformation = ({ navigation }) => {
  //CURP: código alfanumérico de identificación que consta de 18 dígitos
  const [curp, setCurp] = React.useState(null);
  const [text, setText] = React.useState(null);

  const validateCURP = () => {
    if (curp == null) {
      setText("Ingresa tu CURP para continuar.");
    } else if (
      curp == "MAGM721101HDFRRR09" ||
      curp == "MAAN730219MDFGLR04" ||
      curp == "MAMM990804MDFRGR00"
    ) {
      navigation.navigate("VERIFICAR", { curpTest: curp });
    } else {
      setText(
        "La CURP indicada no muestra ningún resultado.\nPor favor, revisa la información capturada y reintenta nuevamente."
      );
    }
  };

  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.view2}>
        <Text style={styles.titleStyle}> VERIFICA LOS DATOS </Text>
        <View style={styles.containerInput}>
          <View>
            <Text style={styles.text}> Código de Transacción: </Text>
          </View>
          <Input
            placeholder="Primer nombre"
            style={styles.input}
            value={curp}
            onChangeText={(e) => {
              if (e != null) {
                if (onlyNumbers(e)) {
                  setCurp(e);
                }
              } else {
                setCurp("");
              }
            }}
            maxLength={40}
          />
        </View>
        <View style={{marginBottom:10}}>
        <Text style={styles.textStyle}>
          Revisa que esté correcto, puedes corregirlo si es necesario.
        </Text>

        </View>
   
        <View style={styles.containerInput}>
          <View>
            <Text style={styles.text}>Nombre: </Text>
          </View>
          <Input
            placeholder="nombre completo"
            style={styles.input}
            value={curp}
            onChangeText={(e) => {
              if (e != null) {
                if (onlyNumbers(e)) {
                  setCurp(e);
                }
              } else {
                setCurp("");
              }
            }}
            maxLength={40}
          />
        </View>
        <View style={styles.containerInput}>
          <View>
            <Text style={styles.text}> Identificación: </Text>
          </View>
          <Input
            placeholder="17XXXXXXXX"
            style={styles.input}
            value={curp}
            onChangeText={(e) => {
              if (e != null) {
                if (onlyNumbers(e)) {
                  setCurp(e);
                }
              } else {
                setCurp("");
              }
            }}
            maxLength={40}
          />
        </View>
        <View style={styles.containerInput}>
          <View>
            <Text style={styles.text}> Carga de Saldo: </Text>
          </View>
          <Input
            placeholder="17XXXXXXXX"
            style={styles.input}
            value={curp}
            onChangeText={(e) => {
              if (e != null) {
                if (onlyNumbers(e)) {
                  setCurp(e);
                }
              } else {
                setCurp("");
              }
            }}
            maxLength={40}
          />
        </View>
        <View style={styles.containerInput}>
          <View>
            <Text style={styles.text}> Valor:</Text>
          </View>
          <Input
            placeholder="17XXXXXXXX"
            style={styles.input}
            value={curp}
            onChangeText={(e) => {
              if (e != null) {
                if (onlyNumbers(e)) {
                  setCurp(e);
                }
              } else {
                setCurp("");
              }
            }}
            maxLength={40}
          />
        </View>
  
        <Text h5 style={{ color: "red" }}>
          {"\n"}
          {text}
        </Text>
        <Button
          title="APLICAR"
          titleStyle={styles.titleButtons}
          buttonStyle={styles.buttons}
          onPress={() => {
            validateCURP();
          }}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view2: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop:80
    
  },indicator:{
    position:'absolute',
    top:30, 
    minWidth:Dimensions.get('window').width
    },
  titleStyle: {
    color: "#FF0000",
    fontSize: 24,
    marginVertical: 10,
    marginBottom: 50,
    textAlign: "center",
  },
  textStyle: {
    color: "#979797",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "justify",
  },
  buttons: {
    backgroundColor: "#00C7B1",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00C7B1",
    width: 190,
    marginTop: 20,
    marginLeft: 5,
  },
  titleButtons: {
    letterSpacing: 1.25,
    fontWeight: "bold",
    fontSize: 14,
  },
  fieldSet: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: 50,
    marginBottom: 20,
  },
  col: {
    flexDirection: "column",
    maxHeight: 4,
    maxWidth: 30,
    minHeight: 4,
    minWidth: 30,
    borderRadius: 4,
  },
  legend: {
    fontSize: 12,
    position: "absolute",
    top: -10,
    left: 8,
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.38)",
  },
});