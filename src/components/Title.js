import React from 'react';
import {View, Text} from 'react-native';
const Title = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#373248',
          textAlign: 'center',
        }}>
        Newsantara
      </Text>
      <Text style={{textAlign: 'center', color: '#373248'}}>
        Jendela ke Dunia Berita
      </Text>
      <Text style={{marginTop: 30, textAlign: 'center', marginHorizontal: 50, color: '#373248'}}>
        Newsantara membantu anda dalam membaca berita terkini dimanapun dan kapanpun
      </Text>
    </View>
  );
};

export default Title;
