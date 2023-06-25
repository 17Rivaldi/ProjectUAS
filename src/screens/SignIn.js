import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import SignInHeader from '../components/SignInHeader';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#f7f6fd'}}>
      <SignInHeader title="Login" description="Login ke aplikasi newsantara" />

      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          borderColor: '#03a9f4',
          borderWidth: 1,
          color: '#000000'
        }}
        placeholder="Masukkan Email Anda"
        placeholderTextColor= 'gray'
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          borderRadius: 9,
          elevation: 2,
          paddingLeft: 10,
          borderColor: '#03a9f4',
          borderWidth: 1,
          color: '#000000'
        }}
        placeholder="Masukkan Password Anda"
        placeholderTextColor= 'gray'
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 25,}}
        onPress={() => navigation.navigate('LupaPassword')}>
        <Text style={{textAlign: 'left', fontWeight: 'bold', color: '#03a9f4'}}>
          Lupa Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 40,
          backgroundColor: '#03a9f4',
          paddingVertical: 15,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 9,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 40, color: '#000000'}}>
        Atau login dengan
      </Text>

      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 40}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            elevation: 2,
          }}>
          <Image
            source={require('../images/google.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            elevation: 2,
          }}
          onPress={() => navigation.navigate('Register')}>
          <Image
            source={require('../images/facebook.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            paddingVertical: 10,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
          }}>
          <Image
            source={require('../images/apple.png')}
            style={{width: 25, height: 35}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{marginTop: 20, marginRight: 20}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#000000'}}>
          Bukan Member?{' '}
          <Text style={{color: '#03a9f4'}}>Registrasi Disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
