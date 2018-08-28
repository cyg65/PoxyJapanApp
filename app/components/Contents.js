/* @flow */

import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createSwitchNavigator, createTabNavigator, createStackNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
import Login from './Login/Login';
import Profile from './Home/Profile/Profile';
import CatalogContent from './Home/Catalog/CatalogContent';
import RegisterWebView from './Login/RegisterWebView';
import Search from './Home/Search/Search';

const notification = 1;
const platform = Platform.OS;
const badgeContent = notification > 99 ? null : notification;

export const HomeTabNavigator = createTabNavigator(
  {
    Catalog: { screen: CatalogContent },
    Profile: { screen: Profile },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: props => (
      <Footer style={styles.footerShadow}>
        <FooterTab>
          <Button
            badge
            vertical
            active={props.navigationState.index === 0}
            onPress={() => {
              props.navigation.navigate('Catalog');
            }}
          >
            <Badge style={badgeContent === null ? styles.badgeDot : undefined}>
              <Text>{badgeContent}</Text>
            </Badge>
            <Icon
              style={[
                badgeContent === null ? styles.iconDot : undefined,
                {
                  color: platform === 'ios' ? '#6c5ce7' : '#b3c7f9',
                  fontSize: 35,
                },
              ]}
              active={props.navigationState.index === 0}
              name="home"
            />
          </Button>
          <Button
            active={props.navigationState.index === 1}
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          >
            <Icon
              style={{
                fontSize: 35,
              }}
              active={props.navigationState.index === 1}
              name="person"
            />
          </Button>
        </FooterTab>
      </Footer>
    ),
  },
);

export const SignedOut = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterWebView,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },
});

export const SignedIn = createStackNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
    },
    Search: { screen: Search },
  },
  {
    headerMode: 'none',
  },
);

export const createRootNavigator = (signedIn: boolean = false) =>
  createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );
const styles = StyleSheet.create({
  footerShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  badgeDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginLeft: 5,
  },

  iconDot: {
    marginTop: -12,
  },
});
