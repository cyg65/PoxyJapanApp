import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

class TrendCatalog extends Component {
  render() {
    return (
      <View>
        <Text> TrendCatalog </Text>
      </View>
    );
  }
}

export default withNavigationFocus(TrendCatalog);
