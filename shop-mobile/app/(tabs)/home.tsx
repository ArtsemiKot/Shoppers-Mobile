import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
function Home() {
    const router = useRouter()
    return (
        <>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ alignItems: 'center' }}>Back</Text>
                <AntDesign onPress={() => router.replace('/login')} name="back" size={24} color="black" />
            </View>
        </>
    );
}

export default Home;