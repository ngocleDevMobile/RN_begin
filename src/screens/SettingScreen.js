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
  Image,
  Pressable,
  KeyboardAvoidingView
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
  const [spinner, setSpinner] = useState('Select items');
  const [isCheck, setIscheck] = useState(false);

  const addValue = () => {
    database()
      .ref('UsersList/')
      .push({
        name,
        age,
      })
      .then((data) => {
        console.log('data ', data);
      })
      .catch((error) => {
        console.log('error ', error);
      });
  };

  useEffect(() => {
    const onValueChange = database()
      .ref(`UsersList/`)
      .on('value', (snapshot) => {
        let listUser = [];
        let newArray = Object.entries(snapshot.val());
        newArray.map((item) => {
          listUser.push({
            id: item[0],
            name: item[1].name,
            age: item[1].age,
          });
        });
        setData(listUser);
        console.log("Check----");
      });

    // Stop listening for updates when no longer required
    return () => database().ref(`UsersList/`).off('value', onValueChange);
  }, []);

  const setSpinners = async (item) => {
      await setSpinner(item.name);
      await setIscheck(false);
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
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
      <View style={{flex: 1, marginRight: 4}}>
        {/* <ScrollView> */}

        {/* </ScrollView> */}
        <TouchableOpacity
          onPress={() => setIscheck(true)}
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 8,
            height: 50,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text>{spinner}</Text>
          <Image
            resizeMode="contain"
            style={{width: 20, height: 20}}
            source={require('../assets/images/drop.png')}
          />
        </TouchableOpacity>
        <View>
          {isCheck ? (
            <FlatList
              data={data}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => setSpinners(item)}
                  style={{
                    height: 50,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'orange',
                  }}>
                  <Text>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : null}
        </View>
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
