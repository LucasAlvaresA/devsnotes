import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Texto, Botao} from './styles';

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Texto>Tela de listar</Texto>
      <Botao title="Ir para EDITAR" onPress={()=>navigation.navigate("EditNote")}/>
    </Container>
  );
};