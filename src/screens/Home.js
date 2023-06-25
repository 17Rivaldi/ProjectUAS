import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, FlatList, ScrollView, StatusBar, TextInput, Image, ImageBackground, VirtualizedList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import NewsDetails from '../components/Detail/newsDetail';

const Home = () => {
  const navigation = useNavigation();
  const [pencarian, setPencarian] = useState('');

  const [trending, setTrending] = useState([
    {
      judul: 'Ketua Umum PSSI Erick Thohir Undang Pierluigi Collina ke Indonesia untuk Memotivasi Wasit Nasional',
      image: require('../images/News18.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news18
    },
    {
      judul: 'Uasi Dikantongi Asnawi, Garnacho Beri Balasan di Media Sosial',
      image: require('../images/News11.jpeg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news11
    },
    {
      judul: 'Resmi! Karim Benzema Gabung Al Ittihad dengan Gaji Rp3,1 Triliun per Tahun',
      image: require('../images/News13.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news13
    },
    {
      judul: 'Daftar 18 Wasit untuk Liga 1 Musim Depan: Tidak Ada Fariq Hitaba, Iwan Sukoco, hingga Aprisman Aranda',
      image: require('../images/News23.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news23
    },
    {
      judul: 'Erick Thohir Ungkap Alasan Argentina Mau Ujicoba Lawan Timnas Indonesia',
      image: require('../images/News2.png'),
      oleh: 'By Tribun Manado',
      tgl: '24 Mei 2023',
      detail: NewsDetails.news2,
    },
    {
      judul: 'Berbeda dengan Lionel Scaloni, Media Argentina Sanjung Pratama Arhan: Bek Berbahaya dengan Teknik Khusus',
      image: require('../images/News25.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news25
    },
  ]);

  const [populer, setPopuler] = useState([
    {
      judul: 'Liverpool Disebut Hampir Resmi Datangkan Bintang Timnas Argentina Alexis Mac Allister di Bursa Transfer Musim Panas 2023',
      image: require('../images/News3.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By OkeBola',
      detail: NewsDetails.news3,
    },
    {
      judul: 'Chealsea Terpuruk di Liga Inggris 2022-2023. Ini Harapan Frank Lampard agar The Blues Bangkit Musim Depan',
      image: require('../images/News4.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By OkeBola',
      detail: NewsDetails.news4
    },
    {
      judul: '5 Klub Paling Sering Ditaklukan Inter Milan di Copa Italia',
      image: require('../images/News5.jpeg'),
      tgl: '27 Mei 2023',
      oleh: 'By IDN Times',
      detail: NewsDetails.news5
    },
    {
      judul: 'Selamat! Bayern Munchen Juara Bundesliga Musim 2022/2023',
      image: require('../images/News10.jpg'),
      oleh: 'By Tribun Manado',
      tgl: '',
      detail: NewsDetails.news9,
    },
    {
      judul: 'Luis Enrique Dinilai Sempurna Buat Napoli',
      image: require('../images/News6.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news6
    },
    {
      judul: 'Daftar Tim-Tim yang Sudah Lolos ke Liga Champions dari 4 Liga Top Eropa',
      image: require('../images/News7.jpg'),
      oleh: 'By Tribun Manado',
      tgl: '27 Mei 2023',
      detail: NewsDetails.news7,
    },
    {
      judul: 'Mengenang Kehebatan Inter Milan Meraih Treble 13 Tahun Silam: Jose Mourinho Luar Biasa!',
      image: require('../images/News8.png'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news8
    },
    {
      judul: 'Marcus Rashford Pecahkan Rekor Gol Semusim Robin van Persie dan Wayne Rooney',
      image: require('../images/News9.png'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news10
    },
    {
      judul: 'Ngolo Kante: Terima Kasih, Chealsea!',
      image: require('../images/News12.jpeg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news12
    },
    {
      judul: 'RESMI Kai Havertz Pindah ke Arsenal, Chelsea Rugi Rp 266 Miliar',
      image: require('../images/News14.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news14
    },
    {
      judul: 'Mohamed Salah Hancur setelah Man United Kalahkan Chelsea, Liverpool Gagal Lolos ke Liga Champions',
      image: require('../images/News1.jpeg'),
      oleh: 'By Tribun Manado',
      tgl: '27 Mei 2023',
      detail: NewsDetails.news1,
    },
    {
      judul: 'Dalam Sehari, Dua Bintang Chelsea Pindah ke Klub Rival, Mason Mount Menyusul?',
      image: require('../images/News15.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news15
    },
    {
      judul: 'Berita Persija, Permintaan Thomas Doll pada Marko Simic: Cetak Gol!',
      image: require('../images/News16.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news16
    },
    {
      judul: 'Piala Asia 2023: Jepang dan Vietnam Menggila di FIFA Matchday, Irak Kalah Tipis Atas Kolombia',
      image: require('../images/News17.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news17
    },
    {
      judul: '10 Kandidat Kuat Peraih Golden Boy Award 2023: Jude Bellingham atau Jamal Musiala?',
      image: require('../images/News19.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news19
    },
    {
      judul: 'Skuad Luis Milla Makin Sangar Kedatangan Tyronne del Pino, Marc Klok OTW Bawa Persib Bandung Juara',
      image: require('../images/News20.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news20
    },
    {
      judul: 'Manajer Persebaya Bakal Tunjuk Kapten Baru di BRI Liga 1 2023 / 2024, Siapa Dia?',
      image: require('../images/News21.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news21
    },
    {
      judul: 'Reaksi Media Malaysia Selepas Duel Timnas Indonesia Vs Timnas Argentina: Tim Garuda Bikin Cemas Lawan',
      image: require('../images/News22.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news22
    },
    {
      judul: '3 Pemain Ini Bakal Jadi Aset Masa Depan Timnas Indonesia Usai Tampil Menonjol Saat Hadapi Argentina: Semua Berstatus Abroad',
      image: require('../images/News24.jpg'),
      tgl: '27 Mei 2023',
      oleh: 'By Bola.Net',
      detail: NewsDetails.news24
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

            <View style={{ flexDirection: 'row', marginLeft: 2 }}>
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
                    onPress={() => navigation.navigate('Trend1', { trendingItem: item })}>
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
            }}
            onPress={() => navigation.navigate('Trend1', { populerItem: item })}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                  <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 10 }} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000000' }}>{item.judul}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                <Text style={{ color: '#97928E' }}>{item.tgl}</Text>
                <Text style={{ textAlign: 'right', color: '#97928E' }}>{item.oleh}</Text>
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
