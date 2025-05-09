import React from 'react';
import {View, StyleSheet} from 'react-native';
import BotaoProps from './components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botao pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  return(
    <View style={styles.container}>
      <BotaoProps label="Clique aqui" corFundo="purple" onPress={handlePress}/>
      <BotaoProps label="Clique agora" corFundo="pink" onPress={handlePress}/>
      <BotaoProps label="Clique não" corFundo="grey" onPress={teste}/>
    </View>
  );

};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;