import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const News = () => {
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
              source={require('../../images/News1.jpeg')}
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
            Mohammed Salah Hancur Setelah Man United Kalahkan Chealsea, Liverpool Gagal Lolos Ke Liga Champions
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
                textAlign: 'justify'
              }}>
              TRIBUNMANADO.CO.ID - Penyerang Liverpool, Mohamed Salah mengaku dirinya merasa hancur setelah Man United membantai Chelsea dengan skor 4-1 dalam laga tunda pekan ke32 Liga Inggris 2022-2023.
              Kemenangan itu membuat Man United menyegel tiket ke Liga Champions 2023-2024.
              Kepastian itu menghancurkan hati Mohamed Salah.{'\n'}
              Mohamed Salah langsung bereaksi begitu tahu bahwa Man United memetik kemenangan 4-1 atas Chelsea di Stadion Old Trafford, pada Jumat (26/5/2023) lalu.
              Kemenangan telak atas Chelsea itu meloloskan Man United ke Liga Champions 2023-2024.
              Ada empat wakil Inggris untuk kompetisi antarklub paling elite Benua Biru musim depan sudah lengkap, yakni Man City, Arsenal, Man United, dan Newcastle.
              Liverpool pun mesti gigit jari karena gagal finis di zona Liga Champions, alias empat besar klasemen Liga Inggris 2022-2023.
              Liverpool (66 poin) yang kini menempati posisi lima, sudah tidak mungkin menyalip perolehan poin Newcastle (70) maupun Man United (72) mengingat Premier League tinggal menyisakan satu pekan lagi.
              Fakta yang menyakitkan mengingat Liverpool musim lalu berstatus sebagai finalis Liga Champions.
              “Saya benar-benar hancur. Sama sekali tidak ada alasan untuk ini.
              Kami memiliki semua yang kami butuhkan untuk lolos ke Liga Champions musim depan dan kami gagal,” tulis Mo Salah di Twitter, sesaat setelah laga Man United vs Chelsea usai.
              “Kami adalah Liverpool dan kelolosan ke kompetisi itu adalah standar minimal.
              Saya minta maaf, namun terlalu dini untuk sebuah unggahan yang membangkitkan atau bernada positif.
              Kami mengecewakan kalian dan diri kami sendiri,” tulis Salah lagi.
              Liverpool pun harus menerima kenyataan bahwa musim depan mereka akan berkompetisi di Liga Europa, yang sering dinilai sebagai kasta kedua kancah antarklub Eropa.
              Prestasi Liverpool di Liga Inggris 2022-2023 memang jauh melorot jika dibandingkan dengan musim lalu.
              Mohamed Salah dkk terhitung sembilan kali menelan kekalahan sepanjang Premier League 2022-2023.
              Padahal, The Reds mengarungi musim 2021-2022 dengan hanya menderita dua kekalahan dan menempati posisi dua klasemen.
              Harus mundur sampai 2015-2016 untuk melihat kali terakhir Liverpool gagal finis di empat besar klasemen Premier League.
              Kala itu, The Reds yang mencopot Brendan Rodgers dan mulai mempekerjakan Juergen Klopp sebagai peracik taktik pada pertengahan kompetisi, menutup musim dengan menduduki peringkat 8.
              Hasil Manchester United vs Chelsea
              Hasil pertandingan Liga Inggris 2022-2023 antara Manchester United vs Chelsea, Jumat (26/5/2023), tuan rumah Red Devils menang telak 4-1.
              Laga Manchester United vs Chelsea digelar di Stadion Old Trafford, Manchester, Inggris. Kick off Jumat dini hari WIB pukul 02.00 atau Kamis malam waktu setempat.
              Duel Manchester United vs Chelsea berjalan alot. Jual beli serangan terjadi antara kedua kubu.
              Pesta empat gol Manchester United dicetak oleh Casemiro (6'), Anthony Martial (45'+), Bruno Fernandes (73') dan Marcus Rashford (78').
              Sedangkan satu gol balasan Chelsea dicetak Joao Felix pada menit ke-89.
              Jalannya pertandingan
              Manchester United memulai pertandingan dengan misi mengamankan tempat untuk tiket Liga Champions musim depan.
              Alhasil tuan rumah berhasil mencuri gol pada menit ke-6 lewat gol tandukan Casemiro.
              Gelandang timnas Brasil itu memanfaatkan tendangan bebas dari sisi kanan pertahanan Chelsea.
              Sundulan master class Casemiro tak dapat dihalau penjaga gawang Chelsea, Kepa Arrizabalaga.
              The Red Devils memimpin laga dengan keunggulan 1-0.
              Sial bagi tuan rumah, pemain sayap lincah asal Brasil, Antony harus meninggalkan lapangan lebih awal karena mengalami cedera setelah di-tackle bek Chelsea, Chalobah.
              Antony langsung diganti Marcus Rashford pada menit ke-29.
              Chelsea yang tertinggal mencoba untuk mencuri gol. Beberapa peluang didapatkan The Blues.
              Gawang David De Gea beberapa kali mendapat ancaman.
              Peluang didapatkan Chelsea lewat Kai Havertz.
              Belum beruntung, bola tandukan Havertz masih melebar di sisi gawang yang dijaga David De Gea setelah menerima umpan bek muda, Lewis Hall.
              Unggul dalam penguasaan bola, Chelsea kembali menebar ancaman.
              Kali ini lewat Mykhailo Mudryk setelah menerima umpan matang dari Enzo Fernandez.
              Sayang, dribble yang dilakukan Mudryk terlalu kuat membuatnya tak mampu mengejar bola yang sudah berada di depan De Gea.
              Serangan balasan pun diciptakan tim asuhan Erik ten Hag.
              Peluang Manchester United datang dari kerja sama Marcus Rashford dan Jadon Sancho.
              Menerima umpan Rashford, Jadon Sancho mencoba mengirim bola ke tiang jauh gawang Kepa, namun bola berhasil diblok pemain Chelsea.
              Gol kedua Manchester United akhirnya tercipta lewat kaki Anthony Martial pada menit ke-45.
              Umpan brilian Casemiro kepada Sancho berhasil mengelabui para pemain Chelsea.
              Tak mau egois, Sancho mengirim umpan dan diselesaikan oleh Martial menjadi gol.
              Manchester United unggul 2-0 hingga turun minum babak pertama.
              Babak kedua dimulai, Erik ten Hag melakukan rotasi pemain.
              Luke Shaw digantikan oleh Tyler Malacia saat babak kedua dimulai.
              Serangan demi serangan diciptakan kedua tim.
              Gelandang timnas Portugal, Bruno Fernandes menciptakan peluang emas, namun belum bisa merobek gawang yang dijaga Kepa Arrizabalaga.
              Tendangan Fernandes membentur mistar gawang Kepa setelah menerima umpan matang Sancho.
              Bruno Fernandes akhirnya mencetak gol di menit ke-73 lewat hadiah penalti yang diberikan wasit setelah dirinya dijatuhkan bek Chelsea, Wesley Fofana.
              Tendangan penalti Fernandes ke sisi kanan berhasil mengecoh Kepa Arrizabalaga.
              Tuan rumah pun unggul 3-0 atas Chelsea.
              Berselang beberapa menit, gol keempat bagi Manchester United dicetak Marcus Rashford pada menit ke-78.
              Rashford berhasil mengecoh Wesley Fofana kemudian memperdayai Kepa dengan dua kali shot.
              Tim tamu akhirnya berhasil mencetak gol hiburan lewat, Joao Felix pada menit ke-89.
              Penyerang asal Portugal itu mencetak gol indah setelah melakukan akselerasi.
              Tendangan Felix tak mampu dihalau David De Gea.
              Skor 4-1 untuk kemenangan Manchester United bertahan hingga peluit panjang tanda berakhirnya laga ditiup wasit.
              Dengan kemenangan ini, Manchester United sukses mengunci tiket Liga Champions musim depan.
              Poin Manchester United di table klasemen sudah tidak mampu dikejar Liverpool yang menjadi pesaing terdekat.
              Klub Rival Terbesar Manchester United di Liga Inggris itu harus pasrah bermain di Liga Europa, kompetisi kasta kedua Sepak Bola Eropa.
            </Text>
          </View>
        </View>
  
      </ScrollView>
    </View>
  );
};

export default News;