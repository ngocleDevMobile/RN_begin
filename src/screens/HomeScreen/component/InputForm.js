import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from '../styles'
import ic_eye_show from '../../../assets/images/eye_show.png';
import ic_eye_hide from '../../../assets/images/eye_hide.png';

const InputForm =React.memo((props) => {
    return (
        <View style={[styles.boxInput, props.style]}>
            <Text style={{fontFamily: 'Raleway-Regular', color: '#1D2226'}}>
             {props.title}
            </Text>
            <View style={styles.boxInput1}>
              <TextInput
                style={styles.txtInput}
                placeholder={props.placeholder}
                secureTextEntry={props.check}
                onChangeText={(value) => props.setValue(value)}
                underlineColorAndroid="transparent"
              />
              {props.lefticon == '1' ? (
                  <Image
                  resizeMode="contain"
                  source={props.icon}
                  style={{width: 16, height: 12}}
                />
              ): null}
              {props.lefticon == '0' ? (
                  <TouchableOpacity onPress={() => props.setCheck(!props.check)}>
                  <Image
                    resizeMode="contain"
                    source={props.check ? ic_eye_hide : ic_eye_show}
                    style={{width: 16, height: 12}}
                  />
                </TouchableOpacity>
              ): null}

            </View>
          </View>
    )
})

export default InputForm;
