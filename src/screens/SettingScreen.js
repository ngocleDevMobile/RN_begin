import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import database from '@react-native-firebase/database';
const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    id: 1,
    title: 'First Item',
    check: false,
  },
  {
    id: 2,
    title: 'Second Item',
    check: false,
  },
  {
    id: 3,
    title: 'Third Item',
    check: false,
  },
  {
    id: 4,
    title: 'Four Item',
    check: true,
  },
  {
    id: 5,
    title: 'Five Item',
    check: false,
  },
];

const SettingScreen = ({navigation: {navigate, goBack}, route}) => {
  // const [data, setData] = useState(DATA);
  // const {value} = route.params;
  // const checkView = (item) => {
  //   let newData = data.map((items) => {
  //     return item.id.toString() == items.id.toString()
  //       ? {...items, check: true}
  //       : {...items, check: false};
  //   });
  //   setData(newData);
  // };

  // useEffect(() => {
  //   database()
  //     .ref('/users/123')
  //     .set({
  //       name: 'Ada Lovelace',
  //       age: 31,
  //     })
  //     .then(() => console.log('Data set.'));
  // }, []);

  const Item = ({item}) => (
    <TouchableOpacity
      onPress={() => checkView(item)}
      style={[styles.item, {backgroundColor: item.check ? 'white' : 'gray'}]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);

  const addValue = () => {
    database().ref('UsersList/').push({
      name,
      age
  }).then((data)=>{
      console.log('data ' , data)
  }).catch((error)=>{
      console.log('error ' , error)
  })
  };

  useEffect(() => {
    const onValueChange = database()
      .ref(`UsersList/`)
      .on('value', snapshot => {
        let listUser = [];
        let newArray = Object.entries(snapshot.val());
        newArray.map(item => {
          listUser.push({
            id: item[0],
            name: item[1].name,
            age: item[1].age
          })
        });
        setData(listUser);
      });
      
    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref(`UsersList/`)
        .off('value', onValueChange);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ paddingTop: 50, paddingHorizontal: 20}}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{borderWidth: 1}}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={{borderWidth: 1, marginTop: 20}}
        />
        <TouchableOpacity
        onPress={() => addValue()}
          style={{
            backgroundColor: 'orange',
            height: 50,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginRight: 4}}>
        {/* <ScrollView> */}
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: width / 2,
    marginLeft: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
  },
});
export default SettingScreen;
