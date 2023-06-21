import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, FlatList, ScrollView, StatusBar, TextInput, Image, ImageBackground, VirtualizedList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation();
  const [pencarian, setPencarian] = useState('');

  const [trending, setTrending] = useState([
    {
      judul: 'Mohamed Salah Hancur setelah Man United Kalahkan Chelsea, Liverpool Gagal Lolos ke Liga Champions',
      image: require('../images/News1.jpeg'),
      targetScreen: 'Trend1'
    },
    {
      judul: 'Erick Thohir Ungkap Alasan Argentina Mau Ujicoba Lawan Timnas Indonesia',
      image: require('../images/News2.png'),
      targetScreen: 'Trend2'
    },
    {
      judul: 'Daftar Tim-Tim yang Sudah Lolos ke Liga Champions dari 4 Liga Top Eropa',
      image: require('../images/News7.jpg'),
      targetScreen: 'Trend3'
    },
    {
      judul: 'Selamat! Bayern Munchen Juara Bundesliga Musim 2022/2023',
      image: require('../images/News10.jpg'),
      targetScreen: 'Trend4'
    },
  ]);

  const [populer, setPopuler] = useState([
    {
      judul: 'Liverpool Disebut Hampir Resmi Datangkan Bintang Timnas Argentina Alexis Mac Allister di Bursa Transfer Musim Panas 2023',
      author: 'By OkeBola',
      image: require('../images/News3.jpg')
    },
    {
      judul: 'Chealsea Terpuruk di Liga Inggris 2022-2023. Ini Harapan Frank Lampard agar The Blues Bangkit Musim Depan',
      author: 'By OkeBola',
      image: require('../images/News4.jpg')
    },
    {
      judul: '5 Klub Paling Sering Ditaklukan Inter Milan di Copa Italia',
      author: 'By IDN Times',
      image: require('../images/News5.jpeg')
    },
    {
      judul: 'Luis Enrique Dinilai Sempurna Buat Napoli',
      author: 'By Bola.Net',
      image: require('../images/News6.jpg')
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 11, marginTop: 10 }}
        ListHeaderComponent={
          <>
            <StatusBar barStyle='dark-content' backgroundColor={'#FAFAFA'} />
            <Text style={{ color: '#212121' }}>Hello</Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#212121' }}>Rivaldi👋</Text>

            <View style={{ flexDirection: 'row' }}>
              <TextInput
                value={pencarian}
                onChangeText={text => setPencarian(text)}
                placeholder="Cari informasi tentang berita terkini"
                placeholderTextColor='#97988E'
                style={{
                  backgroundColor: '#F7F7F7',
                  elevation: 5,
                  marginTop: 20,
                  paddingLeft: 10,
                  borderRadius: 10,
                  flex: 1,
                  color: '#000000'
                }}
              />
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#4285F4',
                  marginTop: 20,
                  paddingHorizontal: 20,
                  marginLeft: 10,
                  elevation: 5,
                  borderRadius: 10
                }}>
                <Icon name="search" size={25} color='#F4F4F4' />
              </TouchableOpacity>
            </View>

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
                <Text style={{ fontSize: 14, color: '#97928E' }}>Lihat Semua</Text>
                <Icon name="chevron-forward" size={20} color="#97928E" />
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 10, marginTop: 2 }}>
              <FlatList
                data={trending}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      width: 260,
                      height: 210,
                      backgroundColor: '#FAFAFA',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      marginTop: 10,
                    }}
                    onPress={() => navigation.navigate(item.targetScreen)}>
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
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                        }}
                      >
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>{item.judul}</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              />
            </View>

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
                <Text style={{ fontSize: 14, color: '#97928E' }}>Lihat Semua</Text>
                <Icon name="chevron-forward" size={20} color="#97928E" />
              </TouchableOpacity>
            </View>
          </>
        }
        data={populer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              marginTop: 5,
              backgroundColor: '#FFFFFF',
              elevation: 5,
              borderRadius: 12,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 5,
              marginHorizontal: 2,
              borderColor: '#03a9f4'
            }}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                  <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 10 }} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000000' }}>{item.judul}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ textAlign: 'right', color: '#97928E' }}>{item.author}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
          paddingVertical: 5,
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
          elevation: 5,
          marginHorizontal: 40,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Icon name="home" size={25} color="#4285F4" />
          <Text style={{fontSize: 12, color: '#97928E'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Bookmark')}
        > 
          <Icon name="bookmark" size={25} color="#97928E" />
          <Text style={{fontSize: 12, color: '#97928E'}}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person-outline" size={25} color="#97928E" />
          <Text style={{fontSize: 12, color: '#97928E'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
