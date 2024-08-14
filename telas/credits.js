import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Credits() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créditos</Text>
      <Text style={styles.creditText}>Este aplicativo foi desenvolvido por:</Text>
      <Text style={styles.names}>- Felipe Rodrigues Pereira</Text>
      <Text style={styles.names}>- Icaro Regis Menezes</Text>
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
  creditText: {
    fontSize: 20,
    color: '#3B4CCA',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#FFCB05',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  names: {
    fontSize: 18,
    color: '#3B4CCA',
    marginBottom: 5,
    textAlign: 'center',
    textShadowColor: '#FFCB05',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
