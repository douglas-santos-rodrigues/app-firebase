import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Firebase from "../../config/firebaseConfig";
//import { AuthContext } from "../../contexts/AuthContext";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//import firestore from '@react-native-firebase/firestore';
import { getFirestore, collection, getDocs, getDoc ,setDoc, doc} from "firebase/firestore";
import uuid from "react-native-uuid";
import { AuthContext } from "../../contexts/AuthContexts";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //const [userss, setUsers] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    signIn();
    buscadados();
  }, []);

  async function buscadados() {
    const db = getFirestore(Firebase);
    const querySnapshot = await getDocs(collection(db, "cities"));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({
        ...doc.data(),
        key: querySnapshot.id,
      });
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id,  "  => ", doc.data());
    });
    setLista(users);

  }

  async function inserirDados() {
    const db = getFirestore(Firebase);

    // Add a new document in collection "cities"
    const id = uuid.v4();
    const reso = await setDoc(doc(db, "cities", id), {
      id: id,
      descricao: descricao,
      valor: valor,
    });
    console.log(reso)
  }

  function logar() {
    // const auth = getAuth();
    // const user = auth.currentUser;
    // console.log(user);

    setIsLoading(true);
    const auth = getAuth();

    //const user = auth.currentUser;

    signInWithEmailAndPassword(auth, email, password)
      .then((Firebase) => {
        // Signed in
        const user = Firebase.user;
        // ...
        console.log("------", user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          alert("That email address is invalid!");
        }

        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function cadastro() {
    setIsLoading(true);
    const auth = getAuth();

    //const user = auth.currentUser;

    createUserWithEmailAndPassword(auth, email, password)
      .then((Firebase) => {
        // Signed in
        const user = Firebase.user;
        // ...
        console.log("------", user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          alert("That email address is invalid!");
        }
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ width: "90%" }}
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ width: "90%" }}
        mode="outlined"
        label="Senha"
        placeholder="Type something"
      />

      <TextInput
        value={valor}
        onChangeText={(text) => setValor(text)}
        style={{ width: "90%" }}
        mode="outlined"
        label="Valor"
        placeholder="Type something"
      />
      <TextInput
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        style={{ width: "90%" }}
        mode="outlined"
        label="Descricao"
        placeholder="Type something"
      />

      <Button style={{ width: "90%" }} mode="contained" onPress={() => inserirDados()}>
        Salvar
      </Button>

      <Button
        style={{ width: "90%" }}
        mode="contained"
        onPress={() => cadastro()}
      >
        Cadatrar
      </Button>

      <Button style={{ width: "90%" }} mode="contained" onPress={() => logar()}>
        Logar
      </Button>
      <Text>Douglas Santos </Text>

      <FlatList
              data={lista}
              renderItem={({ item }) => (
                <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>User ID: {item.id}</Text>
                  <Text>User Name: {item.name}</Text>
                </View>
              )}
              keyExtractor={item => item.id}

              />

      
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
