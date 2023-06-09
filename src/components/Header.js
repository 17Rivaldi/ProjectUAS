import React from 'react';
import {View, Image, StatusBar, useWindowDimensions} from 'react-native';

const Header = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <StatusBar backgroundColor={'#f7f6fd'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Image
          source={require('../images/logoapp.png')}
          style={{width: width - 40, height: width - 200, borderRadius: 50}}
        />
      </View>
    </View>
  );
};

export default Header;
