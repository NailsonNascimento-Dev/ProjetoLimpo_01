import { StyleSheet, View } from 'react-native';
import { TYText } from 'tuya-panel-kit';
import React from 'react';
import ButtonPower from 'components/buttonPower';
import MenuBotoom from './menuBottom';

const Lumini: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonPower/>
      <MenuBotoom/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex:1    
  },
});

export default Lumini;
