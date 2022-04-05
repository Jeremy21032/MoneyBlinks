import React from "react";
import { StyleSheet, View, Alert, Dimensions } from "react-native";
import { Button, Text, Input, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { getData } from "../services/DataTransaction";
import { date } from "../Function/Date";
export const VerifyInformation = ({ navigation }) => {
  //code: código alfanumérico de identificación que consta de 18 dígitos
  const [curp, setCurp] = React.useState(null);
  const [text, setText] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [carga, setCarga] = React.useState(null);
  const [valor, setValor] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [codigo, setCodigo] = React.useState(null);
  const validateCURP = () => {
    let arreglo = getData(curp);
    setName(arreglo[1]);
    setCodigo(arreglo[5]);
    setId(arreglo[0]);
    setValor(arreglo[4]);
    setCarga(arreglo[3]);
    setImage(arreglo[2]);
    if (curp != null && curp != " ") {
      setShow(true);
    }
  };
  
  let validar = () =>{
    let fecha= date();
    let d= new Date()
    let hora= d.getHours();
    let minutos=d.getMinutes();

    let horaMinutos=hora+":"+minutos;
    let monto= parseFloat(valor)
    let tipo;
    if(carga == "RECIBIR DINERO"){
      tipo="R"
    }else if(carga == "ENTREGAR DINERO"){
      tipo="E"
    }
    let arregloGlobal={
      nombre: name,
      id: id,
      codigo: codigo,
      fecha: fecha,
      hora: horaMinutos,
      monto: monto,
      tipo:tipo,
    };
    global.transacciones.push(arregloGlobal);
  }
  let content = (
    <View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: 120, height: 120, borderRadius: 100 }}
        />
      </View>

      <View style={styles.containerInput}>
        <View>
          <Text style={styles.text}>Nombre: </Text>
        </View>
        <Input
          placeholder="nombre completo"
          style={styles.input}
          value={name}
          editable={false}
          onChangeText={(e) => {
            setName(e);
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
          editable={false}
          value={id}
          onChangeText={(e) => {
            setId(e);
          }}
          maxLength={40}
        />
      </View>
      <View style={styles.containerInput}>
        <View>
          <Text style={styles.text}> Carga de Saldo: </Text>
        </View>
        <Input
          placeholder="Recibir/Entregar"
          style={styles.input}
          editable={false}
          value={carga}
          onChangeText={(e) => {
            setCarga(e);
          }}
          maxLength={40}
        />
      </View>
      <View style={styles.containerInput}>
        <View>
          <Text style={styles.text}> Valor:</Text>
        </View>
        <Input
          placeholder="0.00"
          style={styles.input}
          editable={false}
          value={valor}
          onChangeText={(e) => {
            setValor(e);
          }}
          maxLength={40}
        />
      </View>
      <Button
        title="APLICAR"
        buttonStyle={{
          backgroundColor: "#ea8a3d",
          borderRadius: 20,
        }}
        icon={{
          name: "check",
          type: "ant-design",
          size: 15,
          color: "white",
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 20,
        }}
        onPress={() => {
          validar();
          navigation.navigate("MOV")
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.titleStyle}> VERIFICA LOS DATOS </Text>
      </View>

      <ScrollView>
        <View style={styles.view2}>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.text}> Código de Transacción: </Text>
            </View>
            <Input
              placeholder="Ingrese el código"
              style={styles.input}
              value={curp}
              onChangeText={(e) => {
                setCurp(e);
              }}
              autoCapitalize={("sentences", "words", "characters")}
              maxLength={40}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
              Revisa que esté correcto, puedes corregirlo si es necesario.
            </Text>
          </View>
          <Text style={{ color: "red" }}>{text}</Text>

          <Button
            title="Verificar"
            buttonStyle={{
              backgroundColor: "#ea8a3d",
              borderRadius: 20,
            }}
            icon={{
              name: "check",
              type: "ant-design",
              size: 15,
              color: "white",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 20,
            }}
            onPress={() => {
              validateCURP();
            }}
          />
          <View>{show != true ? content : <View></View>}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  view2: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  indicator: {
    position: "absolute",
    top: 30,
    minWidth: Dimensions.get("window").width,
  },
  titleStyle: {
    color: "#0b57a5",
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
  text: {
    color: "#0b57a5",
  },
});
