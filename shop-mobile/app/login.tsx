import { Link } from 'expo-router';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Welcome Back!{'\n'}<Text style={styles.text}>Login with Username & password</Text></Text>
            <View style={styles.wrapperLog}>
                <Text style={styles.textForm}>Username</Text>
                <TextInput style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding:10,
                }}></TextInput>
                <Text style={styles.textForm}>Password</Text>
                <TextInput style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: '#CECECE',
                    width: 269,
                    height: 50,
                    padding:10,
                }}></TextInput>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor:'rgba(249, 239, 5, 1)',
                    backgroundColor: 'rgba(249, 239, 5, 1)',
                    width: 269,
                    height: 50,
                }}><Text style={{textAlign:'center', padding:13, color: 'rgba(208, 68, 68, 1)', fontSize: 14, fontFamily: 'Inter', fontWeight: 700 }}>SIGN IN</Text></TouchableOpacity>
            </View>
            <Text style={styles.textEnd}>Create a new account? <Link style={{ color: 'rgba(18, 14, 219, 1)' }} href="/register">Sign Up</Link></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap:67,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 24,
        fontFamily: 'Iner',
        fontWeight: 400,
        color: 'black',
        textAlign:'center',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Iner',
        fontWeight: 300,
        color: 'black',
    },
    wrapperLog: {
        flex: 0,
        padding: 36,
        gap: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#CECECE',

    },
    textForm: {
        fontSize: 14,
        fontFamily: 'Iner',
        fontWeight: 700,
        color: 'black',
        paddingLeft: 10,
    },
    textEnd: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Iner',
        fontWeight: 300,
        color: 'black',
    }
});
