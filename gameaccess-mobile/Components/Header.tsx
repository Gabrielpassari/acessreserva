import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Lado Esquerdo: Logo e Título */}
      <View style={styles.logoContainer}>
        {/* Adicione a sua logo real aqui depois */}
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>ACCESSGAME</Text>
      </View>

      {/* Lado Direito: Ícones */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="shopping-cart" size={20} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="user" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0F0B1E', // Cor escura parecida com o seu site
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3B1C5A', // A linha roxa que tem no seu site
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    // Aqui você pode adicionar a fonte customizada depois
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  }
});