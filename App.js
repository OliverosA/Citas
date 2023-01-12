import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, Pressable} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => {
          console.log('Presionaste el pressable');
        }}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1, //se utiliza flex 1 para que el contenedor abarque toda la pantalla
  },
  titulo: {
    color: '#3747751',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  tituloBold: {
    color: '#6D28D9',
    fontWeight: '900',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
  },
  btnTextoNuevaCita: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
