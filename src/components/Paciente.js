import {Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Paciente = ({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
}) => {
  const {paciente, fecha, id} = item;

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

  const handleModalShow = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable
          style={[styles.btn, styles.btnEditar]}
          onLongPress={() => {
            handleModalShow, pacienteEditar(id);
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
