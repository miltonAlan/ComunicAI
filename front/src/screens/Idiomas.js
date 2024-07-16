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

const Idiomas = ({navigation}) =>{
  /*
  const [idiomas, setIdiomas] = useState([]);

  useEffect(() => {
    fetchIdiomas();
  }, []);

  const fetchIdiomas = async () => {
    try {
      const response = await fetch("http://192.168.100.20:3000/languages");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIdiomas(data);
    } catch (error) {
      console.error("Error al obtener los idiomas:", error);
    }
  }
  */
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.idiomaFuente}>Idioma fuente</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.usadoRecientemente}>Usado recientemente</Text>
      </View>
      <View style={styles.rect3}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Untitled', { myString: "Español"})}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/image_OABE..png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.espanolMejicano}>
              Español (Mejicano)
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Untitled', { myString: "Español"})}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/image_rM93..png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.espanolEspana}>Español (España)</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Untitled', { myString: "English"})}>
          <View style={styles.image3Row}>
            <Image
              source={require("../assets/images/image_gdRP..png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.ingles}>Inglés</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/image_dsqZ..png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.frances}>Francés</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.todosLosIdiomas}>Todos los idiomas</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <TouchableOpacity style={styles.button5}>
            <View style={styles.image5Row}>
              <Image
                source={require("../assets/images/image_prrW..png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Text style={styles.aleman}>Alemán</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6}>
            <View style={styles.image6Row}>
              <Image
                source={require("../assets/images/image_eVZm..png")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
              <Text style={styles.bulgaro}>Bosnio</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button7}>
            <View style={styles.image9Row}>
              <Image
                source={require("../assets/images/image_eJE5..png")}
                resizeMode="contain"
                style={styles.image9}
              ></Image>
              <Text style={styles.portugues}>Búlgaro</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button8}>
            <View style={styles.image7Row}>
              <Image
                source={require("../assets/images/japon.png")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
              <Text style={styles.bosnio}>Japonés</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button9}>
            <View style={styles.image8Row}>
              <Image
                source={require("../assets/images/image_dRRl..png")}
                resizeMode="contain"
                style={styles.image8}
              ></Image>
              <Text style={styles.ruso}>Portugués</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button10}>
            <View style={styles.image9Row}>
              <Image
                source={require("../assets/images/image_lMUB..png")}
                resizeMode="contain"
                style={styles.image9}
              ></Image>
              <Text style={styles.japones}>Ruso</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 362,
    height: 56,
    backgroundColor: "#FFFFFF",
    marginTop: 23
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
    backgroundColor: "#E6E6E6"
  },
  usadoRecientemente: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 23
  },
  rect3: {
    width: 360,
    height: 226,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -1
  },
  button: {
    width: 339,
    height: 51,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 11
  },
  image: {
    height: 42,
    width: 39
  },
  espanolMejicano: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 27,
    marginTop: 12
  },
  imageRow: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 76,
    marginLeft: 43,
    marginTop: 4
  },
  button2: {
    width: 339,
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 11
  },
  image2: {
    height: 42,
    width: 39
  },
  espanolEspana: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 27,
    marginTop: 10
  },
  image2Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 90,
    marginLeft: 43,
    marginTop: 4
  },
  button3: {
    width: 339,
    height: 47,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 11
  },
  image3: {
    height: 42,
    width: 39
  },
  ingles: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 70,
    marginTop: 15
  },
  image3Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 139,
    marginLeft: 43
  },
  button4: {
    width: 341,
    height: 47,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 11
  },
  image4: {
    height: 42,
    width: 39
  },
  frances: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 66,
    marginTop: 13
  },
  image4Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 130,
    marginLeft: 43,
    marginTop: 3
  },
  rect4: {
    width: 362,
    height: 54,
    backgroundColor: "#E6E6E6",
    marginLeft: -1
  },
  todosLosIdiomas: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 24
  },
  scrollArea: {
    width: 362,
    height: 306,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -1
  },
  scrollArea_contentContainerStyle: {
    height: 500,//306,
    width: 362
  },
  button5: {
    width: 341,
    height: 53,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 11
  },
  image5: {
    height: 42,
    width: 39
  },
  aleman: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 63,
    marginTop: 20
  },
  image5Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 135,
    marginLeft: 43,
    marginTop: 4
  },
  button6: {
    width: 341,
    height: 53,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 11
  },
  image6: {
    height: 42,
    width: 39
  },
  bulgaro: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 63,
    marginTop: 14
  },
  image6Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 133,
    marginLeft: 44,
    marginTop: 3
  },
  button7: {
    width: 341,
    height: 53,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 11
  },
  image9: {
    height: 42,
    width: 39
  },
  portugues: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 60,
    marginTop: 10
  },
  image9Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 111,
    marginLeft: 44,
    marginTop: 6
  },
  button8: {
    width: 341,
    height: 53,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 11
  },
  image7: {
    height: 42,
    width: 39
  },
  bosnio: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 66,
    marginTop: 13
  },
  image7Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 137,
    marginLeft: 44,
    marginTop: 5
  },
  button9: {
    width: 344,
    height: 51,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 9
  },
  image8: {
    height: 42,
    width: 39
  },
  ruso: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 60,
    marginTop: 13
  },
  image8Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 147,
    marginLeft: 46,
    marginTop: 5
  },
  button10: {
    width: 344,
    height: 51,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 9
  },
  image9: {
    height: 42,
    width: 39
  },
  japones: {
    fontFamily: "ABeeZee-Regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 71,
    marginTop: 13
  },
  image9Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 147,
    marginLeft: 46,
    marginTop: 5
  }
});

export default Idiomas;
