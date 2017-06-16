import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native'


export class ModalTester extends React.Component {

    state = {
        modalVisible: false,
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style = {styles.container}>

                <Modal animationType = {"slide"} transparent = {false}
                       visible = {this.state.modalVisible}
                       onRequestClose = {() => { console.log("Modal has closed.") } }>
                    <View style = {styles.modal}>

                        <TouchableHighlight onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                            <Text style = {styles.text}>Close</Text>
                        </TouchableHighlight>

                        <TextInput style={styles.input}
                                   onChangeText={this.onChangeText}
                                   onSubmitEditing={this.getLocation}
                                   clearButtonMode={"always"}
                                   clearTextOnFocus={true}
                                   enablesReturnKeyAutomatically={true}
                                   returnKeyType={"search"}/>

                    </View>
                </Modal>

                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                    <Text style = {styles.text}>Choose City</Text>
                </TouchableHighlight>


            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 100
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 100
    },

    input: {
        borderWidth: 1,
        borderColor: "white",
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    text: {
        color: 'black',
        marginTop: 10
    }
})