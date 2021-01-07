import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SettingScreen = ({navigation: {navigate, goBack}}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SettingScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => goBack()}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
