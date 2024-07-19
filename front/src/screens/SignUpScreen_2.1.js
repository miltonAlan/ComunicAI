import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import Globals from '../utils/globals';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        const credentials = {
            username,
            password,
            name,
            dateOfBirth,
            email,
        };

        try {
            const response = await fetch(`http://${Globals.ENDPOINT_IP}:3000/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            // Mostrar alerta de éxito
            Alert.alert('Éxito', 'Usuario registrado exitosamente. Ahora puedes iniciar sesión.');

            // Redirigir a la pantalla de inicio de sesión
            navigation.navigate('Login'); // Ajusta 'Login' según el nombre real de la pantalla de inicio de sesión

        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
            // Mostrar alerta de error
            Alert.alert('Error', 'Hubo un problema al registrar el usuario. Por favor, intenta nuevamente.');
        }
    };

    return (
        <View style={styles.root}>
            <Image
                source={require("../assets/images/icono.jpg")}
                size={32}
                style={styles.icon}
            ></Image>
            <View style={styles.customInputContainer}>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                    style={styles.customInput}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    style={styles.customInput}
                />
                <CustomInput
                    placeholder="Name"
                    value={name}
                    setValue={setName}
                    style={styles.customInput}
                />
                <CustomInput
                    placeholder="Date of Birth (YYYY-MM-DD)"
                    value={dateOfBirth}
                    setValue={setDateOfBirth}
                    style={styles.customInput}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    style={styles.customInput}
                />
                <Button
                    title="Sign Up"
                    onPress={handleSignUp}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#FEFEFFFF",
    },
    customInputContainer: {
        marginTop: '5%',
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
    icon: {
        width: '50%',
        height: '30%'
    },
});

export default SignUpScreen;
