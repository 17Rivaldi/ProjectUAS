import React, {useState, } from 'react';
import { View, TouchableOpacity, Text, FlatList, ScrollView, StatusBar, TextInput, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation();
  const [pencarian, setPencarian] = useState('');

  // Coba - coba
  const [trending, setTrending] = useState([
    {
      judul: 'Mohamed Salah Hancur setelah Man United Kalahkan Chelsea, Liverpool Gagal Lolos ke Liga Champions',
      image: require('../images/News1.jpeg'),
      author: 'Svetlin Nakov dkk',
    },
    {
      judul: 'Erick Thohir Ungkap Alasan Argentina Mau Ujicoba Lawan Timnas Indonesia',
      image: require('../images/News2.png'),
      author: 'Dotan Nahum',
    },
    {
      judul: 'Daftar Tim-Tim yang Sudah Lolos ke Liga Champions dari 4 Liga Top Eropa',
      image: require('../images/News7.jpg'),
      author: 'Community',
    },
    {
      judul: 'Selamat! Bayern Munchen Juara Bundesliga Musim 2022/2023',
      image: require('../images/News10.jpg'),
      author: 'Dotan Nahum',
    },
    {
      judul: 'React Native Grow',
      image: require('../images/Harimau.jpg'),
      author: 'Community',
    },
  ]);

  const [populer, setPopuler] = useState([
    {
      name: 'Pembayaran Membership Gym',
      description: 'Pembayaran gym s ren',
      price: '20000',
      date: '28/03/2022',
      image: require('../images/News7.jpg')
    },
    {
      name: 'Pembayaran Bis',
      description: 'Pembayaran bis',
      price: '20000',
      date: '28/03/2022',
      image: require('../images/News3.jpg')
    },
    {
      name: 'Pembayaran Pesanan',
      description: 'Pembayaran warkop',
      price: '20000',
      date: '28/03/2022',
      image: require('../images/News7.jpg')
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#A7A7A7' }}>

      {/* Header */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
        
        <StatusBar barStyle='dark-content' backgroundColor={'#FFFFFF'} />
        <Text style={{color: '#212121'}}>Hello</Text>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>Rivaldi👋</Text>

        <View style={{flexDirection: 'row'}}>
          <TextInput value={pencarian} onChangeText={text => setPencarian(text)}
            placeholder="Cari informasi tentang berita terkini" placeholderTextColor= 'gray'
            style={{
              backgroundColor: '#F4F4F4',
              elevation: 3,
              marginTop: 20,
              paddingLeft: 10,
              borderRadius: 5,
              flex: 1,
              color: 'black' //Masukan Warna pada Text Inputnya
            }}/>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4285F4',
              marginTop: 20,
              paddingHorizontal: 20,
              marginLeft: 10,
              elevation: 3
              }}>
            <Icon name="search" size={25} color='#F4F4F4' />
          </TouchableOpacity>
        </View>
        
        {/* Kotak Berita Teratas */}
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 2,
        }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#4285F4' }}>
            Trending
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Lihat Semua</Text>
            <Icon name="chevron-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        {/* Test Horizontal */}
        <View style={{marginLeft: 10, marginTop: 2}}>
          <FlatList
            data={trending}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 260,
                  height: 210,
                  backgroundColor: '#A7A7A7',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{ width: 250, height: 200, borderRadius: 20, overflow: 'hidden' }}
                  resizeMode="cover"
                >
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>{item.judul}</Text>
                    <Text style={{ fontSize: 14, color: '#fff' }}>{item.author}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Kotak Berita Populer*/}
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 2,
        }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4285F4' }}>
            Berita Populer
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Lihat Semua</Text>
            <Icon name="chevron-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
          
        {/* Test */}
        <View style={{marginTop: 15, flex: 1}}>
          <FlatList
            data={populer}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  backgroundColor: '#97928E',
                  elevation: 2,
                  borderRadius: 12,
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  marginBottom: 5
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center', alignItems:'center', marginRight: 10}}>
                    <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 10 }} />
                  </View>
                  <View style={{flex: 1}}>
                    <Text>{item.date}</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={{textAlign: 'right'}}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      {/* Menu Bar */}
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 5,
          paddingTop: 5,
          backgroundColor: 'grey',
          elevation: 3,
          marginHorizontal: 20,
          marginBottom: 10,
          borderRadius: 5
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Icon name="home" size={25} color="#4285F4" />
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
          onPress={() => navigation.navigate('Bookmark')}
        > 
          <Icon name="bookmark" size={25} color="#97928E" />
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
  );
};

export default Home;
