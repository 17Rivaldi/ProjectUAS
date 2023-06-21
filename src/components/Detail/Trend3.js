import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Trend3 = () => {
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
                        source={require('../../images/News7.jpg')}
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
                        Daftar Tim-Tim Yang Sudah Lolos Ke Liga Champions Dari 4 Liga Top Eropa
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
                        Bola.com, Jakarta - Liga-liga top Eropa sudah mendekati akhir musim. Sejumlah tim juga telah dipastikan lolos ke Liga Champions.
                        Di Liga Inggris, tim-tim seperti Liverpool, Tottenham, dan Chelsea gagal mentas ke Liga Champions. Ketiganya tercecer di papan tengah, bahkan The Blues dipastikan absen di kompetisi antarklub Eropa.
                        Sementara di Liga Italia, baru Napoli dan Lazio yang memastikan diri tampil di Liga Champions. Lima tim lainnya masih saling senggol merebut dua slot tersisa, termasuk Inter, Milan, Roma, dan Juventus.
                        Beralih ke Liga Spanyol, tiga tim sukses menyegel tiket Liga Champions. Real Sociedad yang unggul lima poin atas Villarreal masih bisa tergelincir jika kalah pada dua laga sisa.
                        Berikut ini daftar tim-tim yang sudah lolos ke Liga Champions dari empat liga top Eropa.
                        {'\n'}{'\n'}
                        Liga Inggris
                        Manchester City
                        Arsenal
                        Manchester United
                        Newcastle
                        {'\n'}{'\n'}
                        Liga Italia
                        Napoli
                        Lazio
                        Masih Berpeluang
                        Inter Milan
                        AC Milan
                        Atalanta
                        AS Roma
                        Juventus
                        {'\n'}{'\n'}
                        Liga Spanyol
                        Barcelona
                        Real Madrid
                        Atletico Madrid
                        Masih Berpeluang
                        Real Sociedad
                        Villarreal
                        {'\n'}{'\n'}
                        Liga Jerman
                        Dortmund
                        Bayern
                        RB Leipzig
                        Masih Berpeluang
                        Union Berlin
                    </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Trend3;