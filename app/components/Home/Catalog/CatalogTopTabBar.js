import React, { Component } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { StyleProvider, Header, Left, Right, Body, Button, Text, Segment, Icon } from 'native-base';
import platform from '../../../../native-base-theme/variables/platform';
import getTheme from '../../../../native-base-theme/components';
import NavigationService from '../../NavigationService';

type Props = {};
type State = {
  activeTab: string,
};
export default class CatalogTopTabBar extends Component<Props, State> {
  onPressTab(tab) {
    this.props.navigation.navigate(tab);
  }

  isFocused = this.props.navigation.isFocused();

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <ImageBackground
          /* eslint-disable */
          source={require('../../../images/proxy_header_gradient.jpg')}
          /* eslint-enable */
          style={{ width: '100%' }}
        >
          <StatusBar translucent barStyle="light-content" />
          <Header
            hasSegment
            androidStatusBarColor="transparent"
            style={{ backgroundColor: 'transparent' }}
          >
            <Left />
            <Body>
              <Segment>
                <Button
                  first
                  active={this.props.navigationState.index === 0}
                  onPress={() => {
                    this.onPressTab('NewCatalog');
                  }}
                >
                  <Text>Catalog</Text>
                </Button>
                <Button
                  last
                  active={this.props.navigationState.index === 1}
                  onPress={() => {
                    this.onPressTab('TrendCatalog');
                  }}
                >
                  <Text>Trending</Text>
                </Button>
              </Segment>
            </Body>
            <Right>
              <Icon
                onPress={() => {
                  NavigationService.navigate('Search');
                }}
                type="EvilIcons"
                name="search"
                style={{ fontSize: 35, color: 'white' }}
              />
            </Right>
          </Header>
        </ImageBackground>
      </StyleProvider>
    );
  }
}
