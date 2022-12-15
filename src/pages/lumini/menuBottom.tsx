import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, TYSdk, Utils } from 'tuya-panel-kit';
import { useSelector, actions } from '@models';

const { width } = Utils.RatioUtils;

interface Props {
  style?: StyleProp<ViewStyle>;
}

interface Log {
  isSend?: boolean;
  strCodes?: string;
  strIds?: string;
  time?: string;
}

const MenuBottom: React.FC<Props> = props => {
  const { style } = props;
  const dispatch = useDispatch();
  const [code, setCode] = React.useState(false);
  const logs = useSelector(state => state.logs);

  const navToSetting = () => {
    TYSdk.Navigator.push({ id: 'setting' });
  };
  /**
   * função da navegação para pagina lumini
   */
  const navToLumini =() =>{
    TYSdk.Navigator.push({ id: 'lumini' });
  }
  const doClear = () => {
    dispatch(actions.common.clearConsole());
  };



  return (
    <View style={[styles.container, style]}>
     
      <View style={styles.bottom}>
      
      <Button style={styles.clear} onPress={navToLumini}>
          <Text style={styles.clearText}>lumini</Text>
        </Button>
        <Button style={styles.clear} onPress={navToSetting}>
          <Text style={styles.clearText}>Setting</Text>
        </Button>

        <Button style={styles.clear} onPress={doClear}>
          <Text style={styles.clearText}>CLEAR</Text>
        </Button>
      </View>
    </View>
  );
};

MenuBottom.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  container: {
    

    maxHeight:100,
    backgroundColor: 'white',
  


   
  },

  bottom: {
    
  
  justifyContent:'space-around',

    
  },

  clear: {
    borderWidth: 1,
    borderColor: '#303A4B',
    borderRadius: 3,
    width: 64,
    height: 32,
    padding: 5,
    marginRight: 10,
  },

  clearText: {
    backgroundColor: 'transparent',
    fontSize: 12,
    color: '#303A4B',
  },
});

export default MenuBottom;
