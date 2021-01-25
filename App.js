import * as React from 'react';
import {View, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import TabScreen from './src/screens/TabScreen';
import Redux from './src/screens/ExampleRedux';
import {Provider} from 'react-redux';
import allReducers from './src/redux/reducers';
import {createStore, applyMiddleware} from 'redux';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
let store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Redux">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="TabScreen" component={TabScreen} />
          <Stack.Screen name="Redux" component={Redux} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
