import React,{useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const CreateUserScreen = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]:value })
    }

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.inputGroup} >
                <TextInput placeholder="Nombre" 
                onChangeText={(value) => handleChangeText('name',value)} />
            </View>
            <View style={Styles.inputGroup}>
                <TextInput placeholder="Email" 
                onChangeText={(value) => handleChangeText('email',value)} />
            </View>
            <View style={Styles.inputGroup}>
                <TextInput placeholder="Teléfono" 
                onChangeText={(value) => handleChangeText('phone',value)} />
            </View>

            <View>
                <Button title="Añadir Usuario" />
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }

})

export default CreateUserScreen 
