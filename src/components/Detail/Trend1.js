import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Trend1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { trendingItem, populerItem } = route.params;
  
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
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={trendingItem ? trendingItem.image : populerItem ? populerItem.image : null}
            style={{width: 340, height: 320, borderRadius: 20}}
          />
        </View>
        
        <Text
          style={{
            color: '#000000',
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'justify',
          }}>
          {trendingItem ? trendingItem.judul : populerItem ? populerItem.judul : null}
        </Text>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Text
            style={{
              color: '#000000',
              textAlign: 'right'
            }}>
            {trendingItem ? trendingItem.oleh : populerItem ? populerItem.oleh : null}
          </Text>
          
          <Text
            style={{
              color: '#000000',
            }}>
            {trendingItem ? trendingItem.tgl : populerItem ? populerItem.tgl : null}
          </Text>
        </View>

        <Text
          style={{
            color: '#000000',
            marginTop: 10,
            fontSize: 14,
            textAlign: 'justify',
          }}>
          {trendingItem ? trendingItem.detail : populerItem ? populerItem.detail : null}
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Trend1;
