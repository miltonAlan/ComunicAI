import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Alert, TouchableOpacity, TextInput, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importamos Ionicons desde @expo/vector-icons
import Logo from '../../assets/logo.png';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import Globals from '../utils/globals';
import { Icon } from 'react-native-elements';

const LoginScreen_2 = () => {
    const { height } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [ipModalVisible, setIpModalVisible] = useState(false);
    const [newIp, setNewIp] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://${Globals.ENDPOINT_IP}:3000/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                }),
            });

            if (!response.ok) {
                Alert.alert('Error', 'Credenciales inválidas. Por favor, inténtalo de nuevo.');
                return;
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            navigation.navigate('Idiomas');

        } catch (error) {
            console.error('Error al autenticar usuario:', error);
            Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
    };

    const handleConfig = () => {
        setIpModalVisible(true);
    };

    const handleSaveIp = () => {
        console.log('Nueva IP ingresada:', newIp); // Imprimir en consola el valor de newIp
        // Aquí puedes guardar la nueva IP en las variables globales o donde corresponda en tu aplicación
        Globals.ENDPOINT_IP = newIp; // Esto es un ejemplo, asegúrate de cómo manejarías realmente esto en tu app
        setIpModalVisible(false);
    };

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain'
            />
            <TouchableOpacity
                style={styles.configButton}
                onPress={handleConfig}
            >
                <Icon name='settings' type='ionicon' size={24} color='#333' />
            </TouchableOpacity>
            <View style={styles.customInputContainer}>
                <CustomInput
                    placeholder="UserName"
                    value={userName}
                    setValue={setUserName}
                    style={styles.customInput}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    style={styles.customInput}
                />
                <Button
                    title="Login"
                    onPress={handleLogin}
                />
                <Button
                    title="Sign Up"
                    onPress={handleSignUp}
                />
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={ipModalVisible}
                onRequestClose={() => setIpModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{`IP actual: ${Globals.ENDPOINT_IP}\nIngrese nueva IP del Endpoint:`}
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese la nueva IP"
                            value={newIp}
                            onChangeText={text => setNewIp(text)}
                        />
                        <Button
                            title="Guardar"
                            onPress={handleSaveIp}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e8e8e8',
    },
    logo: {
        width: '70%',
        alignSelf: 'center',
        maxHeight: 200,
    },
    customInputContainer: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    customInput: {
        backgroundColor: 'white',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    configButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 50, // Hacer el borderRadius la mitad del padding para hacer un círculo
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default LoginScreen_2;
