import React, {useState} from "react";
import { StyleSheet, View, Image, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialButtonShare from "../components/MaterialButtonShare";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import { useVoiceRecognition } from "../hooks/useVoiceRecognition";
import Tts from 'react-native-tts'; 

const Untitled = () => {
  const [imput, setImput] = useState('')
  const [result, setResult] = useState('')
  const { state, startRecognizing, stopRecognizing, destroyRecognizer } =
  useVoiceRecognition();
  console.log('useVoiceRecognition return value:', { state, startRecognizing, stopRecognizing, destroyRecognizer });

  const handleSpeakResults = () => {
    // Unir los resultados en una sola cadena
    const textToSpeak = state.results[0];
    // Verificar si hay resultados para evitar errores
    if (textToSpeak.trim().length > 0) {
      Tts.speak(textToSpeak);
    }
  };

  const handlePress = () => {
    Alert.alert('Botón presionado');
    setResult(imput)
  };
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.icon5Row}>
          <MaterialIconsIcon
            name="arrow-back"
            style={styles.icon5}
          ></MaterialIconsIcon>
          <MaterialButtonShare
            style={styles.materialButtonShare}
            onPressIn={() => {
              startRecognizing();
              
            }}
            onPressOut={() => {
              stopRecognizing();
            }}
          ></MaterialButtonShare>
          <FeatherIcon name="settings" style={styles.icon6}></FeatherIcon>
        </View>
        <TextInput
          placeholder=""
          placeholderTextColor="rgba(0,0,0,1)"
          editable={false}
          multiline={true}
          style={styles.textInput2}
          value={JSON.stringify(state.partialResults)}
        ></TextInput>
        <View style={styles.image1Row}>
          <TouchableOpacity onPress={handleSpeakResults}>
            <Image
              source={require("../assets/images/Volume_low_1.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </TouchableOpacity>
          <FeatherIcon name="copy" style={styles.icon4}></FeatherIcon>
        </View>
      </View>
      <View style={styles.materialButtonShare1Stack}>
        <MaterialButtonShare1
          style={styles.materialButtonShare1}
          onPressIn={() => {
            
          }}
          onPressOut={() => {
            
          }}
        ></MaterialButtonShare1>
        <View style={styles.icon2Stack}>
          <MaterialIconsIcon
            name="history"
            style={styles.icon2}
          ></MaterialIconsIcon>
          <TextInput
            placeholder=""
            multiline={true}
            style={styles.textInput}
            value={imput}
            onChangeText={setImput}
          ></TextInput>
        </View>
      </View>
      <MaterialIconsIcon
        name="favorite-border"
        style={styles.icon}
      ></MaterialIconsIcon>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/Volume_low_1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <View style={styles.rect2}></View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../assets/images/Image_52.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.ingles}>Inglés</Text>
      <Text style={styles.espanol}>Español</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 25,
    left: 0,
    width: 360,
    height: 352,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,1)"
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 49,
    opacity: 0.26,
    height: 49,
    width: 49,
    marginTop: 7
  },
  materialButtonShare: {
    height: 56,
    width: 56,
    backgroundColor: "#fff",
    overflow: "visible",
    marginLeft: 103
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    opacity: 0.26,
    height: 40,
    width: 40,
    marginLeft: 91,
    marginTop: 12
  },
  icon5Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 4,
    marginRight: 17
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "rgba(5,5,5,1)",
    fontSize: 18,
    width: 286,
    height: 196,
    marginTop: 11,
    marginLeft: 37
  },
  image1: {
    width: 51,
    height: 60
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    opacity: 0.26,
    height: 40,
    width: 40,
    marginLeft: 238,
    marginTop: 10
  },
  image1Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 11,
    marginRight: 20
  },
  materialButtonShare1: {
    height: 56,
    width: 56,
    position: "absolute",
    left: 115,
    top: 191
  },
  icon2: {
    top: 180,
    left: 254,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 52,
    opacity: 0.51
  },
  textInput: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "alexandria-500",
    color: "#121212",
    width: 286,
    height: 181,
    fontSize: 15,
    backgroundColor: "rgba(230,226,238,1)"
  },
  icon2Stack: {
    top: 0,
    left: 0,
    width: 306,
    height: 232,
    position: "absolute"
  },
  materialButtonShare1Stack: {
    top: 448,
    left: 37,
    width: 306,
    height: 247,
    position: "absolute"
  },
  icon: {
    top: 394,
    left: 300,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 45,
    opacity: 0.51
  },
  image: {
    top: 390,
    left: 11,
    width: 51,
    height: 54,
    position: "absolute"
  },
  rect2: {},
  image2: {
    top: 386,
    left: 152,
    width: 50,
    height: 62,
    position: "absolute"
  },
  ingles: {
    top: 405,
    left: 76,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  espanol: {
    top: 405,
    left: 217,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  }
});

export default Untitled;
