import React, { Component } from 'react';
import { Navbar, Grid, Theme } from 'toy-block';
import { View, StyleSheet, Text } from 'react-native';
import DashboardInfo from '../../components/DashboardInfo';
const { StackNavigator }  = Navbar;

class DashBoard extends Component{
    constructor(props, context) {
        super(props, context);
    }

    getInfo = () => {
        return [
            {
                title: '异常应用',
                key: 1,
                count: 1,
                onPress: () => {

                }
            },
            {
                title: '异常实例',
                key: 2,
                count: 1,
                onPress: () => {

                }
            },
            {
                title: '资源报警',
                key: 3,
                count: 1,
                onPress: () => {

                }
            }

        ]
    }

    render() {
        const list = [
                {
                    title: 'CPU',
                    key: 1,
                    image: require('../../assets/img/settings.png')
                },
                {
                    title: '内存',
                    key: 2,
                    image: require('../../assets/img/settings.png')
                },
                {
                    title: '磁盘',
                    key: 3,
                    image: require('../../assets/img/settings.png')
                }
        ];

        const serveList = [
            {
                title: '资源池',
                key: 1,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '中间件',
                key: 2,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '配置中心',
                key: 3,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '测试中心',
                key: 4,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '变更大盘',
                key: 5,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '报警中心',
                key: 6,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '工单',
                key: 7,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '统一搜索',
                key: 8,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '磁盘',
                key: 9,
                image: require('../../assets/img/settings.png')
            },
            {
                title: 'CPU',
                key: 10,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '内存',
                key: 11,
                image: require('../../assets/img/settings.png')
            },
            {
                title: '磁盘',
                key: 12,
                image: require('../../assets/img/settings.png')
            }
        ]

        return (
            <View>
                <View style={styles.info}>
                    {
                        this.getInfo().map((item) => {
                            return (
                                <DashboardInfo
                                    {
                                        ...item
                                    }
                                />
                            )
                        })
                    }
                </View>
                <View>
                    <View style={styles.title}>
                        <Text>
                            资源统计
                        </Text>
                    </View>
                    <View>
                        <Grid
                            list={list}
                            col={3}
                            border={false}
                        />
                    </View>
                </View>
                <View>
                    <View style={[styles.title, {borderBottomColor: '#fff'}]}>
                        <Text>
                            我的服务
                        </Text>
                    </View>
                    <View>
                        <Grid
                            list={serveList}
                            col={4}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    info: {
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor: '#323232'
    },
    title: {
        backgroundColor: '#fff',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        borderBottomColor: Theme.borderColor,
        borderBottomWidth: 1,
    }
})

export default StackNavigator({
    DashBoard: {
        screen: DashBoard,
        path: '/',
        navigationOptions: {
            title: '控制台',
            headerStyle: {
                backgroundColor: '#323232',
                borderBottomColor: '#323232'
            },
            headerTitleStyle: {
                color: '#fff'
            }
        },
    },
});