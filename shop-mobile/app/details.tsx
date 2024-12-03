import BtnBack from '@/assets/images/BtnBack';
import BtnShare from '@/assets/images/BtnShare';
import ShoeImg from '@/assets/images/ShoeImg';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Details() {

    return (
        <View style={{
            flex:1,
            gap: 50,
            backgroundColor:'white'
        }}>
            <View>
                <ShoeImg width={'100%'}></ShoeImg>
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: '90%', left:20, top: 30 }}>
                    <BtnBack></BtnBack>
                    <BtnShare></BtnShare>
                </View>
            </View>
            <View style={{ gap: 10, marginLeft:'10%' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 600, }}>Adidas Shoe</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: 600, }}>Rs. 20000.00</Text>
            </View>
            <TouchableOpacity style={{
                borderWidth: 2,
                borderRadius: 40,
                borderColor: 'rgba(249, 239, 5, 1)',
                backgroundColor: 'rgba(249, 239, 5, 1)',
                width: 269,
                height: 50,
                alignSelf: 'center',
            }}><Text style={{ textAlign: 'center', padding: 14, fontSize: 14, fontFamily: 'Inter', fontWeight: 700, color: 'rgba(77, 23, 23, 1)' }}>Add to Cart</Text></TouchableOpacity>
            <View style={{ gap: 15 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Inter', fontWeight: 700, marginLeft:'10%' }}>More Details</Text>
                <Text style={{ width: '69%', fontSize: 14, fontFamily: 'Inter', fontWeight: 300, color: 'rgba(170, 168, 168, 1)', marginLeft:'15%' }}>Gear up with the latest collections from
                    adidas Originals, Running, Football, Training.
                    With over 20,000+ products, you will never
                    run out of choice. Grab your favorites now.
                    Secure Payments. 100% Original Products.
                    Gear up with adidas.</Text>
            </View>
        </View>
    );
}