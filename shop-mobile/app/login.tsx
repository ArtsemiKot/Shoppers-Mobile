import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    const [login, setLogin] = useState({ name: '', password: '' })
    const changeLogin = ((value: any, tag: any) => {
        setLogin({ ...login, [tag]: value })
    })
    const router = useRouter()

    const authentication = () => {
        try {
            if (!login.name || !login.password) throw new Error('Заполните все поля')
            if (login.password.length < 8) throw new Error('Пароль менее 8 символов. Повторите!')
            router.push('/home')
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textWelcome}>Welcome Back!</Text>
                <Text style={styles.textLogin}>Login with Username & password</Text>
            </View>
            <View style={styles.wrapperLog}>
                <Text style={styles.textForm}>Username</Text>
                <TextInput onChangeText={(value) => changeLogin(value, 'name')} style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding: 10,
                }}></TextInput>
                <Text style={styles.textForm}>Password</Text>
                <TextInput onChangeText={(value) => changeLogin(value, 'password')} style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding: 10,
                }}></TextInput>
                <TouchableOpacity onPress={authentication} style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: 'rgba(249, 239, 5, 1)',
                    backgroundColor: 'rgba(249, 239, 5, 1)',
                    width: 269,
                    height: 50,
                }}><Text style={{ textAlign: 'center', padding: 13, color: 'rgba(208, 68, 68, 1)', fontSize: 14, fontFamily: 'Inter', fontWeight: 700 }}>SIGN IN</Text></TouchableOpacity>
            </View>
            <Text style={styles.textEnd}>Create a new account? <Link style={{ color: 'rgba(18, 14, 219, 1)' }} href="/register">Sign Up</Link></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 67,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWelcome: {
        fontSize: 24,
        fontFamily: 'Iner',
        fontWeight: 400,
        color: 'black',
    },
    textLogin: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 300,
        color: 'black',
    },
    wrapperLog: {
        padding: 36,
        gap: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#CECECE',

    },
    textForm: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 700,
        color: 'black',
        paddingLeft: 10,
    },
    textEnd: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 300,
        color: 'black',
    }
});
