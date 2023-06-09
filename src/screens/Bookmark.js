import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Simpan = () => {
  const navigation = useNavigation();

  return(
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
        <View style={{ flexDirection: 'row', paddingVertical: 5, paddinngTop: 5, backgroundColor: '#ffffff', elevation: 3 }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={25} color="#97928E" />
          <Text style={{fontSize: 12}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Icon name="search" size={25} color="#97928E" />
          <Text style={{fontSize: 12}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Icon name="bookmark" size={25} color="#4285F4" />
          <Text style={{fontSize: 12}}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person-outline" size={25} color="#97928E" />
          <Text style={{fontSize: 12}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
   ) 

}

export default Simpan;