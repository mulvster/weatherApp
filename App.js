import React from 'react';
import {StyleSheet, Text, View, AppRegistry, StatusBar} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <Icon name={'ios-sunny'} size={85} color={'white'}/>
                    <Text>icon</Text>
                    <Text style={styles.temp}>24°</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>Hello World!</Text>
                    <Text style={styles.subtitle}>Let's make it rain</Text>

                </View>

            </View>
        );
    }
}

import Icon from 'react-native-vector-icons/Ionicons'

AppRegistry.registerComponent('WeatherApp', () => App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD017',

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },

    temp: {
        fontSize: 45,
        color: 'white',
    },

    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 5,
        margin: 10,
    },
    title: {
        fontSize: 78,
        color: 'white',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
    },
});
