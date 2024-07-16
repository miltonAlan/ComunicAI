import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import Logo from '../../assets/logo.png';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button'; // Importar el componente Button

const LoginScreen = () => {
    const { height } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

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
                // Aquí manejamos el caso de que el servidor responde con un código de error
                // Por ejemplo, 401 Unauthorized si las credenciales son inválidas
                Alert.alert('Error', 'Credenciales inválidas. Por favor, inténtalo de nuevo.');
                return;
            }
    
            const data = await response.json();
    
            // Aquí puedes manejar la respuesta exitosa
            console.log('Respuesta del servidor:', data);
    
            // Ejemplo de cómo podrías redirigir a otra pantalla después del login exitoso
            // navigation.navigate('Home');
    
        } catch (error) {
            console.error('Error al autenticar usuario:', error);
            // Aquí puedes manejar otros errores, por ejemplo de red
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
                    style={styles.customInput} // Aplicar estilo personalizado
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} // Ocultar texto mientras se escribe
                    style={styles.customInput} // Aplicar estilo personalizado
                />
                <Button
                    title="Login" // Texto del botón
                    onPress={handleLogin} // Función para manejar el evento onPress del botón
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center', // Centrar horizontalmente
        padding: 20,
        backgroundColor: '#e8e8e8', // Color de fondo de la pantalla
    },
    logo: {
        width: '70%',
        alignSelf: 'center', // Centrar horizontalmente la imagen
        maxHeight: 200, // Ajusta la altura máxima según sea necesario
    },
    customInputContainer: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    customInput: {
        backgroundColor: 'white', // Fondo blanco para inputs
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default LoginScreen;
