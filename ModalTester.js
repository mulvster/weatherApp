import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableHighlight, TextInput, Button } from 'react-native'


export class ModalTester extends React.Component {


    constructor(props){
        super(props)      //this allows for me to be able to pass props.//


        console.log(props)
    }


    state = {
        modalVisible: false,  /*start with the modal being hidden */
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
                                   onChangeText={(text) => this.setState({text})}
                                   clearButtonMode={"always"}
                                   clearTextOnFocus={true}
                                   enablesReturnKeyAutomatically={true}
                                   returnKeyType={"search"}
                                   value={this.state.text}/>

                        <Button
                            onPress={()=>{
                                this.props.updateLocation('Bangkok');
                            }}

                            title="search city"
                            color="#841584"
                        />

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