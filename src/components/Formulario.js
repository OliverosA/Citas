import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  cerrarModal,
  setPacientes,
  pacientes,
  paciente: pacienteObj,
  setPaciente: setPacienteApp, //setPaciente que proviene de App.js
}) => {
  const [id, setId] = useState('');
  const [paciente, setPaciente] = useState(''); // setPaciente propio de este componente
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (Object.entries(pacienteObj).length > 0) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);
    }
  }, [pacienteObj]);

  const resetValues = () => {
    //Vaciando los campos
    setPaciente('');
    setPropietario('');
    setTelefono('');
    setEmail('');
    setFecha(new Date());
    setSintomas('');
  };

  const handleCita = () => {
    //TODO
    if ([paciente, propietario, email, fecha, sintomas].includes(''))
      return Alert.alert('Error', 'Todos los campos son obligatorios');

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (id) {
      //Editar Registro Existente
      nuevoPaciente.id = id;

      const pacientesActualizados = pacientes.map(
        pacienteState =>
          (pacienteState.id = nuevoPaciente.id ? nuevoPaciente : pacienteState),
      );

      setPacientes(pacientesActualizados);
      setPacienteApp({}); // vaciando el paciente recibido desde App
    } else {
      // Nuevo registro
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    resetValues();
    cerrarModal();
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {pacienteObj.id ? 'Editar' : 'Nueva'}{' '}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => {
              cerrarModal(), setPacienteApp({}), resetValues();
            }}>
            <Text style={styles.btnCancelarTexto}>Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Cita</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale="es"
                onDateChange={date => {
                  setFecha(date);
                }}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Sintomas"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>
              {pacienteObj.id ? 'Editar' : 'Agregar'} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar: {
    backgroundColor: '#5827A4',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 10,
  },
  btnCancelarTexto: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnNuevaCita: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    paddingVertical: 15,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});
export default Formulario;
