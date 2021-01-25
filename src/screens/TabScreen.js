import * as React from 'react';
import {Text, View} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>{props.title}</Text> */}
      <TextInput
        value={props.title}
        onChangeText={(text) => props.onChangeText(text)}
        style={{
          height: 50,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          color: 'black',
        }}
      />
    </View>
  );
}

function SettingsScreen(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.title}</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App({navigation}) {
  const [state, setState] = React.useState('Login');
  const [title, setTitle] = React.useState('');

  return (
    <View style={{marginTop: 50, flex: 1}}>
      <Tab.Navigator initialRouteName={state}>
        <Tab.Screen
          name="Login"
          component={() => (
            <HomeScreen title={title} onChangeText={(text) => setTitle(text)} />
          )}
        />
        <Tab.Screen
          name="Signup"
          component={() => <SettingsScreen title={'dfe'} />}
        />
      </Tab.Navigator>

      <View style={{height: 100, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            if (state == 'Login') {
              setState('Signup');
              console.log("asfasfasfasfaf----------------"+title);
            //   navigation.navigate('Signup');
            } else {
              setState('Login');
            //   navigation.navigate('Login');
            }
          }}
          style={{
            width: 150,
            height: 60,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff'}}>Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
