import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header'; 

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Aqui chamamos o seu componente Header */}
      <Header />
      
      {/* O corpo da tela principal */}
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo ao GameAccess Mobile!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0B1E', // Cor de fundo principal do app
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});