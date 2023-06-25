import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Simpan = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginHorizontal: 80,
            elevation: 10
          }}>
          <Text style={{color: '#97988E', fontSize: 20, paddingVertical: 10}}>Halaman Tersimpan</Text>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
          paddingVertical: 5,
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
          elevation: 3,
          marginHorizontal: 40,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={25} color="#97928E" />
          <Text style={{fontSize: 12, color: '#97928E'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Bookmark')}>
          <Icon name="bookmark" size={25} color="#4285F4" />
          <Text style={{fontSize: 12, color: '#4285F4'}}>Bookmark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={25} color="#97928E" />
          <Text style={{fontSize: 12, color: '#97928E'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Simpan;
