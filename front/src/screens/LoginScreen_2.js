import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import Logo from '../../assets/logo.png';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const LoginScreen_2 = () => {
    const { height } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Obtener el objeto de navegación

    const handleLogin = async () => {
        try {
            const response = await fetch('http://192.168.100.10:3000/users/login', {
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

            // Redirigir a la pantalla de Idiomas después del login exitoso
            navigation.navigate('Idiomas');

        } catch (error) {
            console.error('Error al autenticar usuario:', error);
            Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <View style={styles.root}>
            <Image 
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain'
            />
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
            </View>
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
});

export default LoginScreen_2;
