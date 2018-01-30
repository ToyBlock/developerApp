import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Theme } from 'toy-block';

const AppCard = (props) => {
    return (
        <View style={styles.appCard}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    tinper-bee
                </Text>
                <Text style={styles.time}>
                    2018-01-12
                </Text>
            </View>
            <View style={styles.infoList}>
                <Text style={styles.info}>
                    实例数：
                </Text>
                <View style={styles.info}>
                    <Text style={styles.success}>
                        2
                    </Text>
                    <Text style={styles.err}>
                        1
                    </Text>
                </View>
                <Text style={styles.info}>
                    状态：
                </Text>
                <Text style={styles.info}>
                    健康
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appCard: {
        height: 80,
        backgroundColor: '#fff',
        // borderTopWidth: 1,
        // borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingTop: 5,
        paddingLeft: 10
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        marginBottom:20,
    },
    time: {
        textAlign: 'right'
    },
    infoList: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    info: {
        width: 80,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    success: {
        backgroundColor: '#52c41a',
        width: 20,
        color: '#fff',
        textAlign: 'center',
    },
    err: {
        backgroundColor: Theme.dangerColor,
        width: 20,
        color: '#fff',
        textAlign: 'center',
    }
})

export default AppCard;