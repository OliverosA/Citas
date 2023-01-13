import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {formatearFecha} from '../helpers';

const InformacionPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false), setPaciente({});
          }}>
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InformacionPaciente;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  titulo: {
    color: 'FFF',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCerrar: {
    backgroundColor: '#E06900',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 10,
  },
  btnCerrarTexto: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    color: '#3774751',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  valor: {
    color: '#334155',
    fontSize: 20,
    fontWeight: '700',
  },
});
