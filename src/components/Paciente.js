import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

const Paciente = ({item}) => {
  const {paciente, fecha} = item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
    padding: 20,
  },
  label: {
    color: '#374151',
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  texto: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
});

export default Paciente;
