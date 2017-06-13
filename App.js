import React from 'react';
import {StyleSheet, Text, View, AppRegistry, StatusBar} from 'react-native';
import ('dotenv').config();

export default class App extends React.Component {

    componentDidMount() /*when app renders run function */ {
        this.getLocation() /* "this" refers to the app class */
    }

    getLocation () {
        navigator.geolocation.getCurrentPosition (
            (posData) => console.log(posData), /* do something with the data */
            (error) => alert(error), /* do something if there's an error */
            {timeout: 10000}
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <Icon name={'ios-sunny'} size={85} color={'white'}/>
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
        backgroundColor: 'red',

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
