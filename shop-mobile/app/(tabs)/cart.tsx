import { Text, View } from "react-native";
import Header from "@/components/Header/Header";
import ShoeImg from "@/assets/images/ShoeImg";
function Cart() {
    const products = [
        { id: 1, imgProduct: 'IMG', name: 'Adidas Shoe', price: 'Rs. 20000.00' },
        { id: 2, imgProduct: 'IMG', name: 'Adidas Shoe', price: 'Rs. 20000.00' },
    ]
    return (
        <>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}>
                <Header></Header>
                <View style={{ flexWrap: 'wrap', justifyContent: 'center', gap: 25, flexDirection: 'row' }}>
                    {products.map((el) =>
                        <View style={{
                            width: 130,
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: '#CECECE',
                            alignItems: 'center'
                        }}>
                            <ShoeImg widht={112} height={112}>{el.imgProduct}</ShoeImg>
                            <Text>{el.name}</Text>
                            <Text>{el.price}</Text>
                        </View>)}
                </View>
                <View>
                    <Text style={{ alignItems: 'center' }}></Text>
                    <Text style={{ alignItems: 'center' }}></Text>
                </View>
            </View>
        </>
    );
}

export default Cart;