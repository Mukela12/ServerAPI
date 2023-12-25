import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

const StoreScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 2 / 3, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20, paddingBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 25,paddingBottom: 10 }}>Zus Coffee</Text>
          <Text style={{ width: '90%', textAlign: 'justify', fontSize: 14, color: '#888' }}>
          a Necessity not a Luxury For many, coffee is a daily need. Specialty coffee, however, is often seen as a luxury. We started ZUS Coffee to change this perception.          </Text>
        </View>
        <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#ccc',
              borderRadius: 40,
              overflow: 'hidden',
            }}
          >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: 'https://res.cloudinary.com/dgdbxflan/image/upload/v1703477324/IMG_3087_fufmus.jpg' }}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 20 / 4 }}>
        <View style={{ flex: 1 / 10, paddingLeft: 15, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Products on Promo</Text>
        </View>
        <View style={{ flex: 9 / 10, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 10, paddingBottom: 10}}>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} style={{ width: '100%' }}>
            {localDealData.map((item) => (
              <View key={item.product} style={{ width: '45%', height: 200, marginVertical: 30, marginHorizontal: 6 }}>
                <Image
                  style={{ width: '70%', height: '100%', borderRadius: 8, marginLeft: 25}}
                  source={{ uri: item.image }}
                />
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.product}</Text>
                  <Text style={{ fontSize: 12, color: '#888' }}>RM {item.price}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#614bc3',
                      padding: 8,
                      borderRadius: 5,
                      marginTop: 5,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 12 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};


const localDealData = [

  {
    product: "Iced Sea Salt Dark Chocolate",
    price: 12.5 ,
    image: 'https://res.cloudinary.com/dgdbxflan/image/upload/v1703487861/Iced-Sea-Salt-Dark-Chocolate_mrafro.png',
  },  {
    product: "Iced Sea Salt Coconut Latté",
    price: 13.5,
    image: 'https://res.cloudinary.com/dgdbxflan/image/upload/v1703492411/Iced-Coconut-Latte%CC%81_ijwknu.png',
  },
  {
    product: "Iced Coconut Latté",
    price: 12.5,
    image: 'https://res.cloudinary.com/dgdbxflan/image/upload/v1703492411/Iced-Coconut-Latte%CC%81_ijwknu.png',
  },{
    product: "Iced Cheese Crème Caramel Matcha",
    price: 12.9,
    image: 'https://res.cloudinary.com/dgdbxflan/image/upload/v1703492411/Iced-Cheese-Cre%CC%80me-Caramel-Matcha_yxsyt1.png',
  },
]

export default StoreScreen;
