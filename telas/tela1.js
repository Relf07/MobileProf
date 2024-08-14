import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import pokeAnimation from '../assets/poke.json';

export default function Tela1({ navigation }) {
  function goTabs() {
    navigation.navigate('Tabs');
  }

  function goCredits() {
    navigation.navigate('Credits');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Profdex!</Text>
      <Text style={styles.subtitle}>Explore o mundo dos Prokessores</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goTabs}>
          <Text style={styles.buttonText}>Entrar na Pokédex</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goCredits}>
          <Text style={styles.buttonText}>Créditos</Text>
        </TouchableOpacity>
      </View>
      <LottieView
        source={pokeAnimation} 
        autoPlay
        loop
        style={styles.animation}
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
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3B4CCA',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#FFCB05',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#3B4CCA',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#FFCB05',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#FFCB05',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3B4CCA',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animation: {
    width: 200, // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    marginTop: 20, // Espaçamento acima da animação
  },
});