/*
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import {Image, Pressable, StyleSheet, Text, View, Button } from "react-native";
import * as FileSystem from "expo-file-system";
import { useVoiceRecognition } from './src/hooks/useVoiceRecognition';
import Tts from 'react-native-tts'; 

export default function App() {
  const { state, startRecognizing, stopRecognizing, destroyRecognizer } =
  useVoiceRecognition();
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">(
    "lightgray"
  );
  const handleSpeakResults = () => { 
    // Unir los resultados en una sola cadena--- prueba de guardar en rama
    const textToSpeak = state.results[0];
    // Verificar si hay resultados para evitar errores
    if (textToSpeak.trim().length > 0) {
      Tts.speak(textToSpeak);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 30 }}>
        Talk GPT 🤖
      </Text>
      <Text>
        Press and hold this button to record your voice.
      </Text>
      <Pressable
        onPressIn={() => {
          setBorderColor("lightgreen");
          startRecognizing();

        }}
        onPressOut={() => {
          setBorderColor("lightgray");
          stopRecognizing();
        }}
        style={{
          width: "90%",
          padding: 30,
          gap: 10,
          borderWidth: 3,
          alignItems: "center",
          borderRadius: 10,
          borderColor: borderColor,
        }}
      >
        <Image style={styles.button} source={require("./assets/button.png")} />
      </Pressable>
      <Pressable
        onPress={handleSpeakResults}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#6495ED",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Speak Results</Text>
      </Pressable>
      <Text style={{marginVertical: 10, fontSize: 20}}>
        {JSON.stringify(state, null, 2)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  action: {
    textAlign: "center",
    color: "#0000FF",
    marginVertical: 5,
    fontWeight: "bold",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 12,
  },
  stat: {
    textAlign: "center",
    color: "#B0171F",
    marginBottom: 1,
  },
});
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importa tus pantallas
import Untitled from './src/screens/Untitled';


export default function App() {
  
  return (
    
      <NavigationContainer>
        <Untitled/>
      </NavigationContainer>
    
  );
}
