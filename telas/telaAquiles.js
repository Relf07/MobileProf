import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const TelaAquiles = ({ route }) => {
  const { image } = route.params;
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    fetch('https://dados.ufrn.br/api/action/datastore_search?resource_id=ff0a457e-76fa-4aca-ad99-48aebd7db070&limit=20000')
      .then(response => response.json())
      .then(data => {
        const funcionarios = data.result.records;

        const buscarProfessorPorNome = (nome, funcionarios) => {
          return funcionarios.find(funcionario => funcionario.nome === nome);
        };

        const nomeProcurado = 'AQUILES MEDEIROS FILGUEIRA BURLAMAQUI';
        const professorEncontrado = buscarProfessorPorNome(nomeProcurado, funcionarios);
        setProfessor(professorEncontrado);
      })
      .catch(error => {
        console.error('Erro ao recuperar os dados:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      {professor ? (
        <View style={styles.card}>
          <Text style={styles.name}>Nome: {professor.nome}</Text>
          <Text style={styles.type}>Sexo: {professor.sexo}</Text>
          <Text style={styles.type}>Formação: {professor.formacao}</Text>
          <Text style={styles.type}>Categoria: {professor.categoria.trim()}</Text>
          <Text style={styles.type}>Lotação: {professor.lotacao}</Text>
          <Text style={styles.type}>Captura: {new Date(professor.admissao).toLocaleDateString()}</Text>
          <Text style={styles.nota}>Desvio Padrão Geral: 1.77</Text>
          <Text style={styles.nota}>Média Geral: 9.57</Text>
        </View>
      ) : (
        <Text style={styles.type}>Carregando informações do professor...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5B7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: screenWidth * 0.8,
    borderRadius: 15,
    backgroundColor: '#FFF',
    elevation: 5,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3B4CCA',
  },
  type: {
    marginTop: 20,
    fontSize: 12,
    color: '#555',
  },
  nota: {
    marginTop:15,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#55FF33',
  }
});

export default TelaAquiles;