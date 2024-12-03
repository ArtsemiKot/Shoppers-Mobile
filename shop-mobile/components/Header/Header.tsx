import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>SHOPPERS</Text>
            <View style={styles.lineHeader}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Iner',
        fontWeight: 600,
        color: 'black',
        padding: 15,
    },
    lineHeader: {
        width: '100%',
        borderWidth: 2,
        borderRadius: 40,
        borderColor: '#CECECE',
    }
});
