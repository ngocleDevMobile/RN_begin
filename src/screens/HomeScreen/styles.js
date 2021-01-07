import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB000',
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    boxForm: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingTop: 30,
      marginTop: 30,
      paddingBottom: 30,
      flex:1
    },
    boxInput: {
      marginLeft: 20,
      marginRight: 20,
      // paddingBottom: 7,
      borderBottomWidth: 1,
      borderColor: '#707070',
    },
    boxInput1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    txtInput: {
      height: 35,
      color: '#1D2226',
      fontFamily: 'Raleway-Bold',
      flex: 1,
    },
    btnLogin: {
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF7300',
      alignSelf: 'center',
      borderRadius: 100,
      marginTop: 35,
      shadowColor: 'rgba(255,125,22,0.2)',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    hello: {
      fontSize: 30,
      fontFamily: 'Raleway-Bold',
      alignSelf: 'center',
    },
    txtNote: {
      fontSize: 16,
      fontFamily: 'Raleway-Regular',
      marginTop: 8,
      alignSelf: 'center',
    }
  });

export default styles
