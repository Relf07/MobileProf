import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import aquilesImagem from '../assets/aquiles.jpg';
import circleAnimation from '../assets/circle.json';
import igorImagem from '../assets/igor.jpg';
import orivaldoImagem from '../assets/orivaldo.png';

const { width: screenWidth } = Dimensions.get('window');

const professors = [
  { id: '1', uri: orivaldoImagem, name: 'Orivaldo', type: 'Type: Programador' },
  { id: '2', uri: aquilesImagem, name: 'Aquiles', type: 'Type: Programador' },
  { id: '3', uri: igorImagem, name: 'Igor', type: 'Type: Programador' }
];

export default function Tela2({ navigation }) {
  const getScreenName = (id) => {
    switch (id) {
      case '1':
        return 'TelaOrivaldo';
      case '2':
        return 'TelaAquiles';
      case '3':
        return 'TelaIgor';
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(getScreenName(item.id), { image: item.uri })}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={item.uri} style={styles.image} />
          <LottieView source={circleAnimation} autoPlay loop style={styles.animation} />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>#{item.id}</Text>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore todos os Pokessores disponíveis</Text>
      <FlatList
        data={professors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5B7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3B4CCA',
    marginBottom: 20,
    textAlign: 'center',
  },
  flatList: {
    paddingHorizontal: 20,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: screenWidth * 0.75,
    height: 350,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 5,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  numberContainer: {
    backgroundColor: '#FF5733',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  number: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3B4CCA',
  },
  type: {
    marginTop: 10,
    fontSize: 20,
    color: '#555',
  },
  animation: {
    width: 210,
    height: 210,
    position: 'absolute',
  },
});