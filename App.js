import React from 'react'
import {StyleSheet, Text, View, AppRegistry, StatusBar, Animated} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import {fetchWeather} from './weatherApiAccess'
import Highlight from 'react-native-highlight-words'
import {ModalTester} from './ModalTester'


const iconNames = {
    Default: 'md-time',
    Clear: 'md-sunny',
    Rain: 'md-rainy',
    Rainy: 'md-rainy',
    Thunderstorm: 'md-thunderstorm',
    Clouds: 'md-cloudy',
    Snow: 'md-snow',
    Drizzle: 'md-umbrella',
}

const phrases = {
    Default: {
        title: 'Fetching the weather for you',
        subtitle: 'Patience please',
        highlight: 'weather',
        color: "#636363",
        backgroundColor: "#9C9C9C"
    },

    Clear: {
        title: 'Not a cloud in the sky',
        subtitle: 'Go outside and play!',
        highlight: 'Go outside',
        color: "#E32500",
        backgroundColor: "#FFD017"
    },
    Rain: {
        title: 'Its raining!',
        subtitle: 'Grab an umbrella',
        highlight: 'umbrella',
        color: "#004A96",
        backgroundColor: "#2F343A"
    },

    Rainy: {
        title: 'Its raining!',
        subtitle: 'Grab an umbrella',
        highlight: 'umbrella',
        color: "#004A96",
        backgroundColor: "#2F343A"
    },

    Thunderstorm: {
        title: 'Thunder and lightening!',
        subtitle: 'Cover yourself',
        highlight: 'Cover',
        color: "#0044FF",
        backgroundColor: "#939393"
    },

    Clouds: {
        title: 'Cloudy',
        subtitle: "But it's kinda nice out",
        highlight: 'kinda',
        color: "#FBFF46",
        backgroundColor: "#020202"
    },

    Snow: {
        title: 'Snowing',
        subtitle: 'Skiing?',
        highlight: 'Skiing?',
        color: "#0214DC",
        backgroundColor: "#15A678"
    },

    Drizzle: {
        title: 'Light Rain',
        subtitle: "At least you won't get soaked",
        highlight: "won't get soaked",
        color: "#B3F6E4",
        backgroundColor: "#1FBB68"
    }
}

export default class App extends React.Component {

    constructor(props){
        super(props)      //this allows for me to be able to pass props.//

        this.updateLocation = this.updateLocation.bind(this);

        console.log(props)
    }

    componentWillMount() {
        this.state = {
            temp: 0,
            weather: 'Default',
            name: 'Calgary',
            searchedCity: 'Calgary',
        }
        this.updateLocation(this.state.searchedCity)
    }

    updateLocation (searchQuery) {
        fetchWeather(searchQuery).then(res => {
            console.log(res)
            this.setState({
                temp: Math.round(res.temp),
                weather: res.weather,
                name: res.name
            })
        })

    }

    render() {
        console.log('component is rendering');
        return (

            <View style={[styles.container, {backgroundColor: phrases[this.state.weather].backgroundColor}]}>

                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <Icon name={iconNames[this.state.weather]} size={85} color={'white'}/>
                    <Text style={styles.temp}>{this.state.temp}°</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>{phrases[this.state.weather].title}</Text>

                    <Highlight
                        style={styles.title}
                        highlightStyle={{color: phrases[this.state.weather].color}}
                        searchWords={[phrases[this.state.weather].highlight]}
                        textToHighlight={phrases[this.state.weather].subtitle}
                    />

                    <Animated.View style={{
                        flex: 1,
                        alignItems: "stretch",
                        justifyContent: "center"}}>
                        <View>
                            <View style={[styles.animatedContainer]}>
                                <Text style={styles.icon}>
                                    {this.state.icon}
                                </Text>

                                <Text style={styles.location}>
                                    {this.state.name}
                                </Text>
                                <Text style={styles.weatherType}>
                                    {this.state.weatherType}
                                </Text>
                            </View>
                        </View>
                    </Animated.View>


                    <ModalTester updateLocation={this.updateLocation}/>


                </View>
            </View>
        );
    }


}
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

    name: {
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
        fontSize: 48,
        color: 'white',
        marginBottom: 5,
    },

    weatherType: {
        fontSize: 34,
        fontWeight: "500"
    },

    animatedContainer: {
        alignItems: "center",
        justifyContent: "center"
    },

    subtitle: {
        fontSize: 28,
        color: 'white',
    },
});
