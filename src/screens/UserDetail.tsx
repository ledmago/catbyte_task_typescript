import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { DELETE_USER } from '../store/users.action';



export default function RootPage(props: any) {
    const { image, username, age, name, address, email, ip } = props.route.params.user
    return (
        <View style={styles.container}>
            {image && <ImageBackground source={{ uri: image }} style={{ width: '100%', height: '100%', }} resizeMode='contain'>
            </ImageBackground>}

            <View style={{ marginTop: 20 }}>
                {username && <Text style={styles.text}>Username : {username}</Text>}
                {age && <Text style={styles.text}>Age: {age}</Text>}
                {address && <Text style={styles.text}>Addres: {address?.address}</Text>}
                {email && <Text style={styles.text}>Email: {email}</Text>}
                {ip && <Text style={styles.text}>IP: {ip}</Text>}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 8,
        alignSelf: 'center',
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
    },
    text: {
        fontSize: 20,
        marginTop: 10,
    }
});


