import React from 'react'
import { Text, TouchableOpacity, View, Modal} from 'react-native'

export class ModalTester extends React.Component {
    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })

    render () {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.setState({open: true})}>
                    <Text>Open modal</Text>
                </TouchableOpacity>
                <Modal
                    offset={this.state.offset}
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({open: false})}
                    style={{alignItems: 'center'}}>
                    <View>
                        <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({offset: -100})}>
                            <Text>Move modal up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({offset: 0})}>
                            <Text>Reset modal position</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({open: false})}>
                            <Text>Close modal</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

}
