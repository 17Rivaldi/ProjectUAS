import React from 'react';
import { View, TouchableOpacity, StatusBar, Image, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FAFAFA"/>
      <ImageBackground
        source={require('../images/Forest.jpg')} style={{flex: 0.5}} resizeMode='cover'>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../images/Harimau.jpg')}
        style={{width: 100, height: 100, borderRadius: 100 / 2, borderWidth: 3, borderColor: '#FFFFFF', position: 'absolute'}}
      />
      </View>
      <View style={{marginTop: 60}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: '#000000'}}>Rivaldi</Text>
        <Text style={{textAlign: 'center', color: '#000000'}}>Jendela Ke Dunia Berita</Text>
        <View style={{marginLeft: 100}}>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
           <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
              <Icon name="mobile" size={25} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>+6281212562916</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
              <Icon name="map-marker-alt" size={25} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>Bandung</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
             <Icon name="envelope" size={25} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>rivaldi191@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
      </View>
      
      <View style={{ flexDirection: 'row', paddingVertical: 5, backgroundColor: 'grey', elevation: 3 }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('Home')}
          >
            <Icon name="home" size={25} color="#97928E" />
            <Text style={{fontSize: 12}}> Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon name="search" size={25} color="#97928E" />
            <Text style={{fontSize: 12}}> Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('Bookmark')}
          >
            <Icon name="bookmark" size={25} color="#97928E" />
            <Text style={{fontSize: 12}}> Bookmark</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon name="user" size={25} color="#4285F4" />
            <Text style={{fontSize: 12}}> Profile</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Profile;
