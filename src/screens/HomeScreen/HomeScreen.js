import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ic_email from '../../assets/images/email.png';
import ic_emails from '../../assets/images/emails.png';
import ic_facebook from '../../assets/images/facebook.png';
import ic_logo from '../../assets/images/rc_logo.png';
import ic_twiter from '../../assets/images/twiter.png';
import InputForm from './component/InputForm';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux'

const HomeScreen = ({navigation: {navigate, goBack}}) => {
  const [check, setCheck] = useState(true);
  const times = useSelector((state) => state.counterReducers);
  console.log("Home"+times);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        resizeMode="contain"
        source={ic_logo}
        style={{height: 93, alignSelf: 'center'}}
      />
      <View style={styles.boxForm}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.txtNote}>Please login to your account.</Text>

          <InputForm
            title={'Email Address'}
            placeholder={'Email'}
            check={false}
            setValue={(value) => console.log(value)}
            lefticon={'1'}
            icon={ic_email}
            style={{marginTop: 30}}
          />
          <InputForm
            title={'Password'}
            placeholder={'Password'}
            check={check}
            setCheck={(bool) => setCheck(bool)}
            setValue={(value) => console.log(value)}
            lefticon={'0'}
            style={{marginTop: 20}}
          />

          <Text
            style={{
              color: '#FF7300',
              fontFamily: 'Raleway-Regular',
              fontSize: 12,
              alignSelf: 'flex-end',
              paddingRight: 20,
              marginTop: 20,
            }}>
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.btnLogin} onPress={() => navigate('TabScreen', {value: 'abc'})}>
            <Text
              style={{color: '#fff', fontFamily: 'Raleway-Bold', fontSize: 16}}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: '#1D2226',
              fontFamily: 'Raleway-Bold',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            Or Login using social media
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 110,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Image
              resizeMode="contain"
              source={ic_facebook}
              style={{width: 16, height: 12}}
            />
            <Image
              resizeMode="contain"
              source={ic_twiter}
              style={{width: 16, height: 12}}
            />
            <Image
              resizeMode="contain"
              source={ic_emails}
              style={{width: 16, height: 12}}
            />
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 20,
          height: 85,
        }}>
        <Text style={{fontFamily: 'Raleway-Medium'}}>
          Don’t have an account?
        </Text>
        <Text
          style={{
            fontFamily: 'Raleway-Medium',
            color: '#FF7300',
            textDecorationLine: 'underline',
          }}>
          Register now
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
