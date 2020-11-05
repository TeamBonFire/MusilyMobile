import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../Header';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>테스트</Text>
      </View>
    );
  }
}
