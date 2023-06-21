import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Trend2 = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 5,
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Icon name="chevron-left" size={20} color="#000000" />
                    <Text style={{color: '#000000', textAlign: 'center', fontWeight: 'bold', marginLeft: 15}}>Back</Text>
                </TouchableOpacity>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{color: '#000000', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>DETAIL</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                    <Icon name="share-alt" size={20} color="#000000" />
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="bookmark" size={20} color="#000000" />
                </View>
            </View>

            <ScrollView>
                <View style={{alignItems: 'center', marginTop: 20, marginHorizontal: 15}}>
                    <Image
                        source={require('../../images/News2.png')}
                        style={{width: 320, height: 300, borderRadius: 20}}
                    />
                    <Text
                        style={{
                            color: '#000000',
                            marginTop: 10,
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'justify',
                        }}>
                        Erik Thohir Ungkap Alasan Argentina Mau Ujicoba Lawan Timnas Indonesia
                    </Text>

                    <View style={{marginHorizontal: 8, marginTop: 10}}>
                    <Text
                        style={{
                            color: '#000000',
                            marginBottom: 5,
                        }}>
                        By Tribun Manado
                    </Text>

                    <Text
                        style={{
                            color: '#000000',
                            textAlign: 'justify',
                            fontSize: 15
                        }}>
                        BOLASPORT.COM - Ketua Umum PSSI, Erick Thohir, angkat bicara perihal alasan Argentina mau berujicoba melawan timnas Indonesia.
                        Erick Thohir menegaskan bahwa kedatangan Argentina ke Indonesia bukan karena faktor Piala Dunia U-20 2023.
                        Sebelumnya sempat dikabarkan kedatangan Argentina ke Indonesia karena Piala Dunia U-20 2023.
                        Argentina dinilai berterima kasih kepada Indonesia yang sudah memberikan status tuan rumah itu kepada mereka.
                        Mantan Presiden Inter Milan itu membantah.{'\n'}
                        Menurutnya, Argentina bersedia melawan timnas Indonesia karena hubungan antar federasi antara PSSI dengan AFA.
                        Seperti diketahui, awalnya FIFA menunjuk Indonesia untuk menjadi tuan rumah Piala Dunia U-20 2023 pada 20 Mei sampai 11 Juni 2023.
                        Satu bulan turnamen itu mau digelar, FIFA mencabut status tuan rumah Piala Dunia U-20 2023 dari Indonesia dengan berbagai macam alasan.
                        Tidak lama kemudian, FIFA memberikan status tuan rumah Piala Dunia U-20 2023 kepada Argentina.
                        "Tidak ada timbal balik, jangan saut-sautkan ini dengan politik."{'\n'}
                        "Ini kerjasama murni yang saling menguntungkan," kata Erick Thohir kepada awak media termasuk BolaSport.com di Stadion Utama Gelora Bung Karno (SUGBK), Senayan, Jakarta Pusat, Rabu (24/5/2023).{'\n'}
                        Lanjut Erick Thohir, kedatangan Argentina karena faktor fanatik masyarakat Indonesia terhadap sepak bola.
                        Beberapa pemain Argentina mempunya pengikut dari Indonesia di media sosialnya.{'\n'}
                        Ini yang membuat Argentina ingin datang memberikan hiburan kepada masyarakat Indonesia.
                        Para pemain Argentina mau bertemu langsung dengan para fansnya di Tanah Air.{'\n'}
                        "Argentina melihat penduduk Indonesia yang gila bola."
                        "Banyak pemain Argentina yang punya followers banyak dari fans Indonesia."
                        "Mereka hadir untuk menyapa fans Argentina dan fans para pemain Argentina secara individu di Indonesia," kata Erick Thohir.
                        Adapun pertandingan timnas Indonesia melawan Argentina akan digelar pada 19 Juni 2023.{'\n'}
                        PSSI menunjuk Stadion Utama Gelora Bung Karno (SUGBK), Senayan, Jakarta Pusat, sebagai venue pertandingan tersebut.
                        Sebelum melawan Argentina, timnas Indonesia akan berjumpa Palestina terlebih dahulu.{'\n'}
                        Duel timnas Indonesia Vs Palestina akan digelar di Stadion Gelora Bung Tomo (GBT), Surabaya, Jawa Timur, pada 14 Juni 2023.
                        Sementara itu, timnas Indonesia bukan satu-satunya lawan Argentina di FIFA Matchday Juni 2023.
                        Lionel Messi dkk juga akan berjumpa Australia di Beijing, China, pada 15 Juni 2023.
                    </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Trend2;