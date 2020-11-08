import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert} from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState()

    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)

        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id 
        })
        setLoading(false);
    }

    useEffect(() => {
        getUserById(props.route.params.userId);
        
    },[])


    const handleChangeText = (name, value) => {
        setUser({...user, [name]:value })
    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection("users").doc(props.route.params.userId);
        await dbRef.delete();

        props.navigation.navigate('UsersList')
    }

    const updateUser = async () => {
        const dbRef = firebase.db.collection("users").doc(user.id); 
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser(initialState)
        props.navigation.navigate('UsersList')
    }


    const openConfirmationAlert = () => {
        Alert.alert('Borrar usuario', '¿Estás seguro?', [
            {text: 'Sí', onPress: () => deleteUser()},
            {text: 'No', onPress: () =>  console.log('cancelado')}
        ])
    }


    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        )
    }

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.inputGroup} >
                <TextInput placeholder="Nombre" value={user.name}
                onChangeText={(value) => handleChangeText('name',value)} />
            </View>
            <View style={Styles.inputGroup}>
                <TextInput placeholder="Email"  value={user.email}
                onChangeText={(value) => handleChangeText('email',value)} />
            </View>
            <View style={Styles.inputGroup}>
                <TextInput placeholder="Teléfono" value={user.phone}
                onChangeText={(value) => handleChangeText('phone',value)} />
            </View>

            <View>
                <Button color='#19ac52'
                title="Modificar" onPress={() => updateUser() } />
            </View>

            <View>
                <Button color='#e37399'
                title="Borrar" onPress={() => openConfirmationAlert() } />
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

export default UserDetailScreen 