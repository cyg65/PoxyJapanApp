import React, { Component } from 'react';
import { View, WebView } from 'react-native';

export default class RegisterWebView extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://www.cdjapan.co.jp/z/login/' }}
          automaticallyAdjustContentInsets={false}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />
      </View>
    );
  }
}
