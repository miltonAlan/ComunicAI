import React, { useState, useEffect }  from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Globals from '../utils/globals'; 

function Idiomas({ navigation }){
  
  const [idiomas, setIdiomas] = useState([]);

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
      setIdiomas(data);
    } catch (error) {
      console.error("Error al obtener los idiomas:", error);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.idiomaFuente}>Idioma fuente</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.usadoRecientemente}>Todos los idiomas</Text>
      </View>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect3}>
          {idiomas.map((idioma, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate('Untitled', { myString: idioma.name})
            }
            >
              <View style={styles.imageRow}>
                <Image
                  source={{ uri: idioma.flagUrl }}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text style={styles.espanolMejicano}>{idioma.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 362,
    height: 56,
    backgroundColor: "#FFFFFF",
    marginTop: 23,
  },
  idiomaFuente: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 23,
    marginLeft: 23,
  },
  rect2: {
    width: 362,
    height: 55,
    backgroundColor: "#E6E6E6",
  },
  usadoRecientemente: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 23,
  },
  rect3: {
    width: 360,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -1,
  },
  button: {
    width: 339,
    height: 51,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 11,
  },
  image: {
    height: 42,
    width: 39,
  },
  espanolMejicano: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 27,
    marginTop: 12,
  },
  imageRow: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 76,
    marginLeft: 43,
    marginTop: 4,
  },
  scrollArea: {
    width: 362,
    height: 306,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -1,
  },
  scrollArea_contentContainerStyle: {
    backgroundColor: "rgba(255,255,255,1)",
    height: 586, // Ajusta según sea necesario
    width: 362,
  },
});

export default Idiomas;
