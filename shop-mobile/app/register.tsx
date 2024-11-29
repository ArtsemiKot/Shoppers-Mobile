import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Register() {
    const [register, setRegister] = useState({ name: '', password: '',  reapetpassword: ''})
    const changeRegister = ((value: any, tag: any) => {
        setRegister({ ...register, [tag]: value })
    })
    const router = useRouter()

    const registration = () => {
        try {
            if (!register.name || !register.password || !register.reapetpassword) throw new Error('Заполните все поля')
            if (register.password.length < 8) throw new Error('Пароль менее 8 символов. Повторите!')
            if (register.reapetpassword != register.password) throw new Error('Пароль не совпадает. Повторите!')
            router.push('/home')
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textHeader}>Welcome!</Text>
                <Text style={styles.text}>Create a new account</Text>
            </View>
            <View style={styles.wrapperLog}>
                <Text style={styles.textForm}>Name</Text>
                <TextInput onChangeText={(value) => changeRegister(value, 'name')} style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding: 10,
                }}></TextInput>
                <Text style={styles.textForm}>Email</Text>
                <TextInput onChangeText={(value) => changeRegister(value, 'password')}  style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding: 10,
                }}></TextInput>
                <Text style={styles.textForm}>Password</Text>
                <TextInput onChangeText={(value) => changeRegister(value, 'reapetpassword')}  style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding: 10,
                }}></TextInput>
                <TouchableOpacity onPress={registration} style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: 'rgba(249, 239, 5, 1)',
                    backgroundColor: 'rgba(249, 239, 5, 1)',
                    width: 269,
                    height: 50,
                }}><Text style={{ textAlign: 'center', padding: 13, color: 'rgba(208, 68, 68, 1)', fontSize: 14, fontFamily: 'Inter', fontWeight: 700 }}>SIGN UP</Text></TouchableOpacity>
            </View>
            <Text style={styles.textEnd}>Already have an account? <Link style={{ color: 'rgba(18, 14, 219, 1)' }} href="/login">Sign In</Link></Text>
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
    textHeader: {
        fontSize: 28,
        fontFamily: 'Inter',
        fontWeight: 800,
        color: 'black',
        textAlign: 'center',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 300,
        color: 'black',
        textAlign: 'center',
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
