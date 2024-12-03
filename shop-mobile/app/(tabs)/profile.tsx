import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header/Header";

function Profile() {
    const router = useRouter()
    return (
        <>
            <View style={{
                flex: 1,
                gap: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}>
                <Header></Header>
                <View style={{
                    gap: 86,
                    alignItems: 'center',
                }}>
                    <Text style={{ alignItems: 'center', fontFamily: 'Inter', fontSize: 32, fontWeight: 700 }}>Hello</Text>
                    <TouchableOpacity onPress={() => router.replace('/login')} style={{
                        borderWidth: 2,
                        borderRadius: 40,
                        borderColor: 'rgba(249, 239, 5, 1)',
                        backgroundColor: 'rgba(249, 239, 5, 1)',
                        width: 269,
                        height: 50,
                    }}><Text style={{ textAlign: 'center', padding: 14, fontSize: 14, fontFamily: 'Inter', fontWeight: 700 }}>SIGN OUT</Text></TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default Profile;