import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const AboutMe = () => {
  const navigation = useNavigation();

  const [name, setName] = useState([
    {
      nama: 'Rivaldi Syaputra',
      nim: '17212002',
    },
    {
      nama: 'Muhammad Ali Sobri',
      nim: '17212004',
    },
    {
      nama: 'Abdul Rohman',
      nim: '17213028',
    },
    {
      nama: 'Ahmad Taufik',
      nim: '17213019',
    },
    {
      nama: 'Agus Hermawan',
      nim: '17212006',
    },
    {
      nama: 'Marthen Bhota',
      nim: '17213036',
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          alignItems: 'flex-start',
          marginLeft: 15,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="chevron-left" size={20} color="#000000" />
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{
            color: '#000000',
            fontSize: 26
        }}>Anggota</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 20, marginTop: 5}}>
        <View>
          {name.map((item, index) => (
            <Text key={index} style={{textAlign: 'left', marginTop: 10, color: '#000000', fontSize: 18}}>
              {item.nama}
            </Text>
          ))}
        </View>

        <View>
          {name.map((item, index) => (
            <Text key={index} style={{textAlign: 'center', marginTop: 10, color: '#000000', fontSize: 18}}>
              {item.nim}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AboutMe;
