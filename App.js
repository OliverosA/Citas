import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const onNuevaCitaHandler = () => {
    setModalVisible(true);
  };

  const pacienteEditar = id => {
    const pacienteEditar = paciente.filter(paciente => paciente.id === id);

    setPaciente(pacienteEditar[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNuevaCita} onPress={onNuevaCitaHandler}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
              />
            );
          }}
        />
      )}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
      />
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
  noPacientes: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 40,
    textAlign: 'center',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
