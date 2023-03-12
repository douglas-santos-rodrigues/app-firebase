import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { AuthContext } from "../../contexts/AuthContexts";

export default function Inicial() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', width:'90%', alignItems:'center', justifyContent:'space-between'}}>
        <Button
          style={{ paddingHorizontal: 15, paddingVertical: 5,}}
          mode="contained"
          onPress={() => logar()}
        >
          Cadastre-se
        </Button>
        <Button
         style={{ paddingHorizontal: 10, paddingVertical: 5,}}
          mode="contained"
          onPress={() => logar()}
        >
          Acessar conta
        </Button>
      </View>
    </View>
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
