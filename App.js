import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
//import Login from "./src/pages/Login";
import Inicial from "./src/pages/Inicial";
import { AuthProvider } from "./src/contexts/AuthContexts";

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Inicial />
      </AuthProvider>
    </PaperProvider>
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
