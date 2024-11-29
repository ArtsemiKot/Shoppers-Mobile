import Shop from '../assets/images/Shop';
import { useRouter } from 'expo-router';
import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME TO SHOPPERS</Text>
      <Shop onPress = {()=>router.replace('/login')} style = {styles.img_shop}></Shop>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:30,
    backgroundColor: '#ffd33d',
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
  img_shop:{ 
    left:'5%'
  }
});
 