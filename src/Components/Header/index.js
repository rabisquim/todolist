import React from 'react';
import {StyleSheet , View, Text} from 'react-native';


export default function Header() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Lista de Tarefas</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#2b7ed7',
        elevation: 10,
        justifyContent: 'center',
        width: '100%',
        
    },
    
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 13
    }
});