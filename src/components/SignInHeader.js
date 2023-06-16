import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const SignInHeader = props => {
  return (
    <View style={{marginTop: 40, marginBottom: 10}}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#03a9f4',
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#000000'
        }}>
        {props.description}
      </Text>
    </View>
  );
};

export default SignInHeader;
