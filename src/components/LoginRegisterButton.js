import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const LoginRegisterButton = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 150,
        backgroundColor: '#f1f3ff',
        marginHorizontal: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        elevation: 3,
        marginBottom: 110,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f1f3ff',
          paddingVertical: 20,
          borderRadius: 15,
        }}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{fontWeight: 'bold', color: '#4285F4'}}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4285F4',
          paddingVertical: 20,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{fontWeight: 'bold', color: '#ffffff'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginRegisterButton;
