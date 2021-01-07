import React from 'react';
import {TextInput, View} from 'react-native';

const Input = ({setName, plaholder}) => {
  return (
    <View>
      <TextInput
        onChangeText={(value) => setName(value)}
        placeholder={plaholder}
        style={{width: 200, height: 50, borderWidth: 1}}
      />
    </View>
  );
};
export default Input;
