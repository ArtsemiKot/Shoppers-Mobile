import { Link } from 'expo-router';
import { Text, View,  StyleSheet, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/login" style={styles.text}><Text style={styles.text}>WELCOME TO SHOPPERS</Text></Link>
      <Image style={styles.img} source={require('../assets/images/pict-welcom.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    width:'50%',
    textAlign:'center',
    fontSize: 36,
    fontWeight:'bold',
    textDecorationLine: 'none',
    color: 'black',
  },
  img:{ 
    width:270,
    height:440,
  }
});
 