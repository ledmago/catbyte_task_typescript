import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { ADD_USER, SET_USER } from '../store/users.action';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

export default function RootPage(props: any) {
    const navigation = useNavigation();
    const user = useSelector((state: any) => state.users.users);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const addUser = () => {

        dispatch({
            type: ADD_USER, payload: {
                username,
                image,
                email,
                age: age,
                id: user.length + 1
            }
        });
        navigation.goBack()
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={(val) => setUsername(val)} placeholder="Username"></TextInput>
            <TextInput style={styles.input} onChangeText={(val) => setImage(val)} placeholder="Image"></TextInput>
            <TextInput style={styles.input} onChangeText={(val) => setEmail(val)} placeholder="Email"></TextInput>
            <TextInput style={styles.input} onChangeText={(val) => setAge(val)} placeholder="Age"></TextInput>
            <TouchableOpacity style={styles.addButton} onPress={() => addUser()}>
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        alignSelf: 'center'

    },
    addButton: {
        width: '92%',
        height: 50,
        backgroundColor: '#4BB543',
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignSelf: 'center'

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 10,
    }
});


