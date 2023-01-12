import {Text, View} from 'react-native';
import React from 'react';

const Paciente = ({item}) => {
  const {paciente, fecha} = item;
  return <Text>{paciente}</Text>;
};

export default Paciente;
