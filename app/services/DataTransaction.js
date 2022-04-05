//Simulación servicio de validación y obtención de datos CURP
export const getData = (code) => {
    var infoData = new Array();
    if (code == "JCM012") {
      infoData[0] = "1710329563";
      infoData[1] = "JUAN CARLOS MEDINA";
      infoData[2] =
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
      infoData[3] = "RECIBIR DINERO";
      infoData[4] = "50.00";
    } else if (code == "CNR345") {
      infoData[0] = "1753003878";
      infoData[1] = "CINTHYA NICOLE REINOSO HERNÁNDEZ";
      infoData[2] =
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80";
      infoData[3] = "ENTREGAR DINERO";
      infoData[4] = "20.00";
    } else if (code == "CMV789") {
      infoData[0] = "1717704066";
      infoData[1] = "CHRISTOPHER MATEO VERA";
      infoData[2] =
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
      infoData[3] = "RECIBIR DINERO";
      infoData[4] = "15.00";
    }else if (code == "JML952") {
      infoData[0] = "1714963095";
      infoData[1] = "JEREMY LEÓN";
      infoData[2] =
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
      infoData[3] = "ENTREGAR DINERO";
      infoData[4] = "35.00";
    
  } else if (code == "DYS120") {
      infoData[0] = "1778952013";
      infoData[1] = "DAYANA ALEJANDRA ROMÁN MALDONADO";
      infoData[2] =
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
      infoData[3] = "RECIBIR DINERO";
      infoData[4] = "120.00";
    }
    return infoData;
  };
  