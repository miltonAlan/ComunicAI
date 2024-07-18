import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Globals from '../utils/globals';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Interpreter_3 = () => {
  const [textFirstHalf, setTextFirstHalf] = useState('');
  const [textSecondHalf, setTextSecondHalf] = useState('');
  const [languageFrom, setLanguageFrom] = useState('');
  const [languageTo, setLanguageTo] = useState('');
  const [languages, setLanguages] = useState([]);
  const { state: state, startRecognizing: startRecognizing, stopRecognizing: stopRecognizing } = useVoiceRecognition();
  const [activeHalf, setActiveHalf] = useState(null);

  useEffect(() => {
    fetchLanguages(); // Llamar a la función para cargar los idiomas
  }, []);

  const fetchLanguages = async () => {
    try {
      const response = await fetch(`http://${Globals.ENDPOINT_IP}:3000/languages`);
      if (!response.ok) {
        throw new Error('Failed to fetch languages');
      }
      const data = await response.json();
      setLanguages(data); // Guardar los idiomas en el estado
      // Establecer idiomas por defecto
      setLanguageFrom(data[0]?.abbreviation || '');
      setLanguageTo(data[1]?.abbreviation || '');
    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  };

  const handleMicPressInFirstHalf = () => {
    console.log('Micrófono Primera Mitad presionado');
    startRecognizing(); // Iniciar reconocimiento de voz
  };

  const handleMicPressOutFirstHalf = () => {
    console.log('Micrófono Primera Mitad liberado');
    stopRecognizing(); // Detener reconocimiento de voz
  };

  const handleMicPressInSecondHalf = () => {
    console.log('Micrófono Segunda Mitad presionado');
    startRecognizing(); // Iniciar reconocimiento de voz
  };

  const handleMicPressOutSecondHalf = () => {
    console.log('Micrófono Segunda Mitad liberado');
    stopRecognizing(); // Detener reconocimiento de voz
  };

  const handleLanguageFromChange = (value) => {
    setLanguageFrom(value);
  };

  const handleLanguageToChange = (value) => {
    setLanguageTo(value);
  };

  const handleSoundButtonPressFirstHalf = () => {
    console.log('Botón presionado:', 'Sonido Primera Mitad');
    // Aquí podrías agregar la lógica adicional que necesites
  };

  const handleEnterButtonPressFirstHalf = () => {
    console.log('Botón presionado:', 'Enter Primera Mitad');
    // Aquí podrías agregar la lógica adicional que necesites
  };

  const handleSoundButtonPressSecondHalf = () => {
    console.log('Botón presionado:', 'Sonido Segunda Mitad');
    // Aquí podrías agregar la lógica adicional que necesites
  };

  const handleEnterButtonPressSecondHalf = () => {
    console.log('Botón presionado:', 'Enter Segunda Mitad');
  };

  // Actualizar resultados de reconocimiento en los estados correspondientes
  useEffect(() => {
    if (state.results.length > 0) {
      console.log('state.results actualizado:', state.results[0]);
      console.log('activeHalf:', activeHalf); // Imprimir el valor de activeHalf
      if (activeHalf === 'first') {
        setTextFirstHalf(state.results[0]);
      } else if (activeHalf === 'second') {
        setTextSecondHalf(state.results[0]);
      }
    }
  }, [state.results, activeHalf]);

  return (
    <View style={styles.container}>
      {/* Primera mitad */}
      <View style={[styles.halfContainer, styles.firstHalf]}>
        {/* Botón de sonido */}
        <TouchableOpacity style={styles.soundButtonFirstHalf} onPress={handleSoundButtonPressFirstHalf}>
          <Ionicons name="volume-high-outline" size={24} color="white" />
        </TouchableOpacity>
        {/* Botón de cerebro */}
        <TouchableOpacity style={styles.brainButtonFirstHalf} onPress={handleEnterButtonPressFirstHalf}>
          <Ionicons name="enter" size={24} color="white" />
        </TouchableOpacity>
        {/* Botón de micrófono */}
        <TouchableOpacity
          style={styles.micButtonFirstHalf}
          onPressIn={() => {
            handleMicPressInFirstHalf();
          }}
          onPressOut={() => {
            setActiveHalf("first");
            handleMicPressOutFirstHalf();
          }}>
          <Ionicons name="mic" size={32} color="white" />
        </TouchableOpacity>
        <TextInput
          style={[styles.input, styles.textInputFirstHalf]}
          placeholder={`${languages.find(lang => lang.abbreviation === languageFrom)?.name} (${languageFrom})`}
          onChangeText={setTextFirstHalf}
          value={textFirstHalf}  // Mostrar el texto reconocido si está disponible
          multiline={true}
          numberOfLines={4}
        />
      </View>

      {/* División en medio */}
      <View style={styles.middleContainer}>
        {/* Dropdowns y icono */}
        <View style={styles.middleContent}>
          <Picker
            selectedValue={languageFrom}
            style={styles.picker}
            onValueChange={handleLanguageFromChange}
            itemStyle={{ fontSize: 50 }}>
            {languages.map((lang) => (
              <Picker.Item key={lang.abbreviation} label={lang.name} value={lang.abbreviation} />
            ))}
          </Picker>

          <Ionicons name="logo-facebook" size={32} color="black" style={styles.icon} />

          <Picker
            selectedValue={languageTo}
            style={styles.picker}
            onValueChange={handleLanguageToChange}>
            {languages.map((lang) => (
              <Picker.Item key={lang.abbreviation} label={lang.name} value={lang.abbreviation} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Segunda mitad */}
      <View style={[styles.halfContainer, styles.secondHalf]}>
        {/* Botón de sonido */}
        <TouchableOpacity style={styles.soundButtonSecondHalf} onPress={handleSoundButtonPressSecondHalf}>
          <Ionicons name="volume-high-outline" size={24} color="white" />
        </TouchableOpacity>
        {/* Botón de cerebro */}
        <TouchableOpacity style={styles.brainButtonSecondHalf} onPress={handleEnterButtonPressSecondHalf}>
          <Ionicons name="enter" size={24} color="white" />
        </TouchableOpacity>
        {/* Botón de micrófono */}
        <TouchableOpacity
          style={styles.micButtonSecondHalf}
          onPressIn={() => {
            handleMicPressInSecondHalf();
          }}
          onPressOut={() => {
            setActiveHalf('second'); // Establecer la segunda mitad como activa
            handleMicPressOutSecondHalf();
          }}>
          <Ionicons name="mic" size={32} color="white" />
        </TouchableOpacity>
        <TextInput
          style={[styles.input, styles.textInputSecondHalf]}
          placeholder={`${languages.find(lang => lang.abbreviation === languageTo)?.name} (${languageTo})`}
          onChangeText={setTextSecondHalf}
          value={textSecondHalf}  // Mostrar el texto reconocido si está disponible
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Para posicionar el botón sobre el cuadro de texto
  },
  firstHalf: {
    backgroundColor: '#FFD700', // Color dorado
  },
  secondHalf: {
    backgroundColor: '#8A2BE2', // Color violeta
  },
  middleContainer: {
    height: windowHeight / 10,
    backgroundColor: '#ADD8E6', // Color azul claro
  },
  input: {
    width: '90%',
    height: '55%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInputFirstHalf: {
    marginTop: '1%', // Espacio en la parte superior
  },
  textInputSecondHalf: {
    marginTop: '-1%', // Sin espacio en la parte superior
  },
  middleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
  },
  picker: {
    flex: 1,
    height: 10,
    marginHorizontal: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  micButtonFirstHalf: {
    position: 'absolute',
    backgroundColor: 'blue', // Color azul para la primera mitad
    borderRadius: 50,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    top: '1%', // Posición arriba para la primera mitad
  },
  micButtonSecondHalf: {
    position: 'absolute',
    backgroundColor: 'red', // Color rojo para la segunda mitad (ejemplo)
    borderRadius: 50,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '1%', // Posición abajo para la segunda mitad
  },
  soundButtonFirstHalf: {
    position: 'absolute',
    backgroundColor: '#4CAF50', // Color verde para el botón de sonido en la primera mitad
    borderRadius: 25,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10, // Posición en la esquina inferior derecha
    right: 10,
  },
  brainButtonFirstHalf: {
    position: 'absolute',
    backgroundColor: '#2196F3', // Color azul para el botón de cerebro en la primera mitad
    borderRadius: 25,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10, // Posición en la esquina inferior izquierda
    left: 10,
  },
  brainButtonSecondHalf: {
    position: 'absolute',
    backgroundColor: '#2196F3', // Color azul para el botón de cerebro en la segunda mitad
    borderRadius: 25,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10, // Posición en la esquina superior derecha
    right: 10,
  },
  soundButtonSecondHalf: {
    position: 'absolute',
    backgroundColor: '#4CAF50', // Color verde para el botón de sonido en la segunda mitad
    borderRadius: 10,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10, // Posición en la esquina superior izquierda
    left: 10,
  },
});

export default Interpreter_3;
