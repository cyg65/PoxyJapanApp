import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Left,
  Body,
  Text,
  StyleProvider,
  Content,
} from 'native-base';
import platform from '../../../../native-base-theme/variables/platform';
import getTheme from '../../../../native-base-theme/components';
import { onSignOut } from '../../Login/Auth';

export default ({ navigation }) => (
  <StyleProvider style={getTheme(platform)}>
    <Container>
      <ImageBackground
        /* eslint-disable */
        source={require('../../../images/proxy_header_gradient.jpg')}
        /* eslint-enable */
        style={{ width: '100%' }}
      >
        <StatusBar translucent barStyle="light-content" />
        <Header androidStatusBarColor="transparent" style={{ backgroundColor: 'transparent' }}>
          <Left>
            <Button transparent>
              <Text>BT</Text>
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
      </ImageBackground>
      <Content style={{ padding: 20 }}>
        <Button
          warning
          block
          onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
        >
          <Text>Logout</Text>
        </Button>
      </Content>
    </Container>
  </StyleProvider>
);
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
