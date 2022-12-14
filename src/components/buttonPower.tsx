import React from 'react';
import {  Button, Utils } from 'tuya-panel-kit';

const ButtonPower = () => {

  const { convertX: cx } = Utils.RatioUtils;
  const powerPath = `M874.039 149.961c199.948 199.949 199.948 524.13 0 724.078-199.949 199.948-524.13 199.948-724.078 0-199.948-199.949-199.948-524.13 0-724.078 19.995-19.995 52.413-19.995 72.408 0 19.995 19.995 19.995 52.413 0 72.408-159.959 159.959-159.959 419.303 0 579.262 159.959 159.959 419.303 159.959 579.262 0 159.959-159.959 159.959-419.303 0-579.262-19.995-19.995-19.995-52.413 0-72.408 19.995-19.995 52.413-19.995 72.408 0zM562.2 0a1 1 0 0 1 1 1v510a1 1 0 0 1-1 1H461.8a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h100.4z`;

  return (
 
    <Button
      iconColor="#fff"
      size={70}
      style={{
        width: cx(150),
        height: cx(150),
        backgroundColor: '#ffc405',
        borderRadius: 150,
        
      }}
      wrapperStyle={{
        alignSelf: 'center',
        marginTop: 100,
        
      }}
      iconPath={powerPath}
    />
  
  );
};

export default ButtonPower;
