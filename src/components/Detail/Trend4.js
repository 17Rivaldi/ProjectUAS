import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Trend4 = () => {
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
                        source={require('../../images/News10.jpg')}
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
                        Selamat! Bayern Munchen Juara Bundesliga Musim 2022/2023
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
                        Bola.net - Bayern Munchen keluar sebagai juara Bundesliga musim 2022/2023. Kesuksesan itu diraih Die Roten usai mengalahkan FC Koln 2-1 pada laga pekan ke-34 Bundesliga di RheinEnergieStadion, Sabtu (25/5/2023) malam WIB.
                        Gol-gol pasukan Thomas Tuchel dicetak oleh Kingsley Coman dan Jamal Musiala. Sementara, gol hiburan untuk Koln dicetak Dejan Ljubicic dari eksekusi penalti.
                        Hasil ini cukup untuk membawa Bayern meraih trofi Bundesliga musim 2022/2023. Bayern finis di posisi teratas dengan 71 poin.
                        Bayern punya poin yang sama dengan sang rival Borussia Dortmund Dortmund. Akan tetapi Thomas Muller dan kolega bisa berpesta karena mereka unggul selisih gol.
                        {'\n'}
                        Gelar Juara Ke-32
                        Gelar juara Bundesliga musim 2022/2023 sekaligus menegaskan dominasi Bayern di ajang Bundesliga. Dia Roten masih menjadi tim yang memenangkan Bundesliga yang paling banyak.
                        Bayern kini telah mengoleksi 32 gelar Bundesliga. Trofi musim ini juga merupakan yang ke-11 beruntun bagi Bayern, terhitung sejak musim 2012/2013.
                        Di bawah Bayern ada Nurnberg yang mempunyai sembilan gelar. Sementara Borussia Dortmund berada di urutan ketiga dengan raihan delapan gelar.
                        {'\n'}
                        Daftar Juara Bundesliga Sepanjang Masa
                        32 kali: Bayern Munchen9 kali: Nurnberg8 kali: Borussia Dortmund7 kali: Schalke 046 kali: Hamburg5 kali: Stuttgart, Borussia Monchengladbach4 kali: Werder Bremen, Kaiserslautern3 kali: Koln, Lokomotive Leipzig, Greuther Furth2 kali: Hertha Berlin, Viktoria 89 Berlin, Dresdner, Hannover 961 kali:Karlsruher FV, Holstein Kiel, TSV 1860 Munich, Blau-Weiss 1890 Berlin, Karlsruher SC, FortunaDusseldorf, Eintracht Frankfurt, Wolfsburg, Freiburger, Rapid Wien, Mannheim, Rot-Weiss Essen, EintrachtBraunschweig
                    </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Trend4;