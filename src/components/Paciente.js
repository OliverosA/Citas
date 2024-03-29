import {Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {formatearFecha} from '../helpers';

const Paciente = ({
  item,
  setModalVisible,
  setPaciente,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente,
}) => {
  const {paciente, fecha, id} = item;

  return (
    <Pressable
      onLongPress={() => {
        setModalPaciente(true), setPaciente(item);
      }}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true), pacienteEditar(id);
            }}>
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => pacienteEliminar(id)}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
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
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});

export default Paciente;
