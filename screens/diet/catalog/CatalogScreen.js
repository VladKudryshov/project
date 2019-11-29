import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import FavoriteCatalogList from './FavoriteCatalogList';
import GlobalCatalogList from './GlobalCatalogList';
import SelfCatalogList from './SelfCatalogList';


export default createAppContainer(createMaterialTopTabNavigator(
    {
        Tab1: {
            screen: () => (<FavoriteCatalogList/>),
            navigationOptions: {
                title: 'Продукты',
            },
        },
        Tab2: {
            screen:  () => (<GlobalCatalogList/>),
            navigationOptions: {
                title: 'Блюда',
            },

        },
        Tab3: {
            screen:  () => (<SelfCatalogList/>),
            navigationOptions: {
                title: 'Избранное',
            },
        },
    },
    {
        initialRouteName: 'Tab1',
        tabBarOptions: {
            style: {backgroundColor: '#394249'}
        }
    }
));
