import React from 'react';
import { View, TouchableOpacity, StatusBar, Image, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
              <Icon name="phone-portrait-outline" size={30} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>+6281212562916</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
              <Icon name="location-sharp" size={30} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>Bandung</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
             <Icon name="mail-open-outline" size={30} color="#212121"/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>rivaldi191@gmail.com</Text>
            </View>
          </View>

          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}
            onPress={() => navigation.navigate('AboutMe')}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
             <Icon name="settings-outline" size={30} color="#212121" style={{transform: [{scaleX: -1}]}}/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>About Me</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}
            onPress={() => navigation.navigate('SignIn')}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
             <Icon name="log-out-outline" size={30} color="#212121" style={{transform: [{scaleX: -1}]}}/>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', color: '#000000'}}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
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
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={25} color="#97928E" />
          <Text style={{ fontSize: 12, color: '#97928E'}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Bookmark')}>
          <Icon name="bookmark" size={25} color="#97928E" />
          <Text style={{ fontSize: 12, color: '#97928E'}}>Bookmark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={25} color="#4285F4" />
          <Text style={{ fontSize: 12, color: '#4285F4'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
