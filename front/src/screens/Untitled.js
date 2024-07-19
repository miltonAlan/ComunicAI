import React, {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Image, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialButtonShare from "../components/MaterialButtonShare";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import { useVoiceRecognition } from "../hooks/useVoiceRecognition";
import Tts from 'react-native-tts';
import Globals from "../utils/globals";
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Languajes from '../components/Idiomas';


function Untitled({ route }){

  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [imput, setImput] = useState('')
  const [result, setResult] = useState('')
  const [message, setMessage] = useState('');
  const { state, startRecognizing, stopRecognizing, destroyRecognizer } =
  useVoiceRecognition();
  console.log('useVoiceRecognition return value:', { state, startRecognizing, stopRecognizing, destroyRecognizer });
  const { myString } = route.params;
  console.log(myString,' a ');
  console.log(selectedLanguage);
  
  useEffect(() => {
    fetchIdiomas();
  }, []);

  const fetchIdiomas = async () => {
    try {
      const response = await fetch(`http://${Globals.ENDPOINT_IP}:3000/languages`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error("Error al obtener los idiomas:", error);
    }
  };

  const findLanguageByName = (languages, name) => {
    return languages.find(language => language.name === name);
  };
  
  // Encontrar idioma:
  const languageName = myString;
  const language = findLanguageByName(languages, languageName);
  
  if (language) {
    console.log(`Abreviatura: ${language.abbreviation}, URL de la bandera: ${language.flagUrl}`);
  } else {
    console.log("Idioma no encontrado");
  }

  const findLanguajeInf = (text) => {
    const languageNamedos = text;
    const languagedos = findLanguageByName(languages, languageNamedos);
  
    if (languagedos) {
      console.log(`Abreviatura: ${languagedos.abbreviation}`);
      const siglas = languagedos.abbreviation;
      return siglas;
    } else {
      console.log("Idioma no encontrado");
    }
  }
  

  const handleSpeakResultsSup = () => {
    // Unir los resultados en una sola cadena
    const textToSpeak = result
    // Verificar si hay resultados para evitar errores
    if (textToSpeak.trim().length > 0) {
      Tts.speak(textToSpeak);
    }
  };

  const handleSpeakResultsInf = () => {
    // Unir los resultados en una sola cadena
    const textToSpeak = imput
    // Verificar si hay resultados para evitar errores
    if (textToSpeak.trim().length > 0) {
      Tts.speak(textToSpeak);
    }
  };

  const handlePress = () => {
    Alert.alert('Traducción realizada');
    setResult(imput)
  };

  const handlePress2 = (text) => {
    setMessage(text);
    Alert.alert(text);
    
  };

  const talkSup = () => {
    const jsonString = JSON.stringify(state.results[0]);
    const text = jsonString.replace(/[\[\]{}"]/g, '');
    setResult(text);
  }

  const talkInf = () => {
    const jsonString = JSON.stringify(state.results[0]);
    const text = jsonString.replace(/[\[\]{}"]/g, '');
    setImput(text);
  }
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
                startRecognizing(language.abbreviation);
                
              }}
              onPressOut={() => {
                stopRecognizing();
                talkSup();
              }}
            ></MaterialButtonShare>
            <FeatherIcon name="settings" style={styles.icon6}></FeatherIcon>
          </View>
          <TextInput
            placeholder=""
            placeholderTextColor="rgba(0,0,0,1)"
            editable={true}
            multiline={true}
            autoCapitalize="sentences"
            style={styles.textInput2}
            value={result}
            onChangeText={setResult}
          ></TextInput>
          <View style={styles.image1Row}>
            <TouchableOpacity onPress={handleSpeakResultsSup}>
              <Image
                source={require("../assets/images/Volume_low_1.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress2('Copiado al portapapeles')}>
              <FeatherIcon name="copy" style={styles.icon4}></FeatherIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.materialButtonShare1Stack}>
          <MaterialButtonShare1
            style={styles.materialButtonShare1}
            onPressIn={() => {
              startRecognizing(selectedLanguage);
            }}
            onPressOut={() => {
              stopRecognizing();
              talkInf();
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
              autoCapitalize="sentences"
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => handlePress2('Añadido a favoritos')}>
          <MaterialIconsIcon
              name="favorite-border" style={styles.icon}
          ></MaterialIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSpeakResultsInf }>
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
        <Text style={styles.text1}>{myString}</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
              onValueChange={(value) => setSelectedLanguage(value)}
              items={Languajes}
              placeholder={{ label : 'Selecciona un idioma', value: null }}
              value={selectedLanguage} // Establece el valor del picker
              useNativeAndroidPickerStyle={false} // Estilos personalizados
              style={{
                inputAndroid: {
                  fontFamily: "ABeeZee",
                  color: "#121212",
                  fontSize: 20
                },
                placeholder: {
                  
                },
              }}
            />
        </View>
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#FEFEFFFF",
  },
  pickerContainer: {
    top: 405,
    left: 217,
    position: "absolute",
    //width: width * 0.3, // Ajusta el ancho del picker al 40% del ancho de la pantalla
    //alignSelf: 'flex-end',
    //marginLeft: width * 0.9,
  },
  rect: {
    top: 25,
    left: 0,
    width: 360,
    height: 352,
    position: "absolute",
    backgroundColor: "#535CE8FF"
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
    fontFamily: "verdana-regular",
    color: "rgba(18,18,17,1)",
    fontSize: 18,
    width: 286,
    height: 196,
    marginTop: 11,
    marginLeft: 37,
    backgroundColor:"#535CE8FF",
    color:"#FEFEFFFF"
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
    color: "rgba(18,18,17,1)",
    fontFamily: "verdana-regular",
    width: 286,
    height: 181,
    fontSize: 18,
    backgroundColor: "#FEFEFFFF"
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
  text1: {
    top: 405,
    left: 60,
    position: "absolute",
    fontFamily: "ABeeZee",
    color: "#121212",
    fontSize: 20
  },
  espanol: {
    top: 405,
    left: 217,
    position: "absolute",
    fontFamily: "ABeeZee",
    color: "#121212",
    fontSize: 20
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontFamily: "ABeeZee",
    color: "#121212",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Untitled;
