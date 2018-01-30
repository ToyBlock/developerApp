/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, StatusBar } from 'react-native';
import { Navbar , Theme} from 'toy-block';
const  { TabNavigator } = Navbar;
import Icon from '../../components/Icon';

import Dashboard from '../Dashboard';
import My from '../My';
import CI from '../CI';
import AppManager from '../AppManager';



const Main = TabNavigator(
    {
        MainTab: {
            screen: Dashboard,
            path: '/',
            navigationOptions: {
                tabBarLabel: '控制台',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='viewgallery'
                        size={20}
                        style={{ color: focused ? tintColor : 'rgba(146,146,146, 1)' }}
                    />
                ),
            },
        },
        CI: {
            screen: CI,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: '持续集成',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='viewlist'
                        size={20}
                        style={{ color: focused ? tintColor : 'rgba(146,146,146, 1)' }}
                    />
                ),
            },
        },
        App: {
            screen: AppManager,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: '应用',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='all'
                        size={20}
                        style={{ color: focused ? tintColor : 'rgba(146,146,146, 1)' }}
                    />
                ),
            },
        },
        My: {
            screen: My,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='user'
                        size={20}
                        style={{ color: focused ? tintColor : 'rgba(146,146,146, 1)' }}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: Theme.primary,
        },



    }
);

export default Main;