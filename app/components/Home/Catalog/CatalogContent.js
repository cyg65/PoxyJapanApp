// import React from 'react';
import { createTabNavigator } from 'react-navigation';
import NewCatalog from './NewCatalog';
import TrendCatalog from './TrendCatalog';
import CatalogTopTabBar from './CatalogTopTabBar';

export default createTabNavigator(
  {
    NewCatalog: { screen: NewCatalog },
    TrendCatalog: { screen: TrendCatalog },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarComponent: CatalogTopTabBar,
  },
);
