import React from "react";
import {View, StyleSheet} from 'react-native';
import BotaoProps from './components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  }

  return (
    <view style={style.container}>
      <BotaoProps label="Clique aqui" corFundo="green" onPress={handlePress}/>
      <BotaoProps label="Clique Agora" corFundo="pink" onPress={handlePress}/>
    </view>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;