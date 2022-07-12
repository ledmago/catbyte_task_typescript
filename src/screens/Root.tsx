import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { ADD_USER, SET_USER } from '../store/users.action';
import { useSelector, useDispatch } from 'react-redux'
import UserCard from "../Components/UserCard";
import axios from 'axios';
import * as AxiosMiddlemware from "../libs/axios"
import { useNavigation } from '@react-navigation/native';
export default function RootPage(props: any) {
    const navigation: any = useNavigation();
    const user = useSelector((state: any) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {

        const data = await AxiosMiddlemware.get("https://dummyjson.com/users")
        if (data.users)
            dispatch({ type: SET_USER, payload: data.users })

    }

    // dispatch({ type: SET_USER, payload: { name: 'John' } });
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlistStyle}
                data={user}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }: { item: User }) => <UserCard user={item} />}
                keyExtractor={(item: User, index: number) => item?.id?.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 150 }}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddUser")}>
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',

    },
    flatlistStyle: {
        marginVertical: 20,
    },
    addButton: {
        width: '92%',
        height: 50,
        backgroundColor: '#4BB543',
        position: 'absolute',
        bottom: 25,
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignSelf: 'center'

    },
    buttonText:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 10,
    }
});


