import React from 'react';
import {StatusBar} from 'react-native';
import Header from './Components/Header';
import List from './Components/List';

export default function Main() {
    return (
        <>
        <StatusBar backgroundColor="#2b7ed7" barStyle="light-content"/>
        <Header/>
        <List />
        </>
    );
}