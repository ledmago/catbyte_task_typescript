import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { DELETE_USER } from '../store/users.action';

interface UserCardIProps {
    user: {
        image: string;
        username: string;
        age: number;
        id: number;
    }
}

export default function RootPage(props: UserCardIProps) {
    const navigation: any = useNavigation();
    const { image, username, age, id } = props.user;
    const dispatch = useDispatch();
    const deleteUser = (id: number) => {
        dispatch({ type: DELETE_USER, payload: { id: id } })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.push("UserDetail", { user: props.user })}>
            <ImageBackground source={{ uri: image }} style={{ width: '100%', height: '100%', }} resizeMode='contain'>
                <View style={styles.overlay}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.age}>{age}</Text>
                </View>
                <TouchableOpacity style={styles.close} onPress={() => deleteUser(id)}>
                    <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>
            </ImageBackground>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '48%',
        borderRadius: 8,

        marginVertical: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,

    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    username: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    age: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold'
    },
    close: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        justifyContent: 'center',
    },
    closeText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});


