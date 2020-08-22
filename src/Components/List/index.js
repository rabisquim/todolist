import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function List() {
    const handleSetItemStatus = (index) => {
        setItems(
            items.map((item, arrayIndex) => {

                if (arrayIndex === index) {
                    return ({ ...item, done: !item.done });
                } else {
                    return item;
                }
            })
        );
    }

    const handleInsertItem = () => {
        if (textInput !== "") {
            setItems([
                ...items, {
                    name: textInput,
                    done: false,
                    id: items[0] ? items[items.length - 1].id + 1 : 0
                }
            ]);
            setTextInput("");
            Keyboard.dismiss();
        }

    }

    const [textInput, setTextInput] = useState("");

    const [items, setItems] = useState([]);


    return (
        <View style={styles.list}>
            <View style={styles.insertContainer}>
                <View style={styles.insertInputContainer}>
                    <TextInput
                        value={textInput}
                        onChangeText={value => setTextInput(value)}
                        placeholder="Inserir item"
                        style={styles.insertInput}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleInsertItem()}
                    >
                        <Text style={{ ...styles.buttonText, color: '#666' }}>
                            Inserir
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            {
                !items[0] ? (
                    <View>
                        <Text>Não existem tarefas</Text>
                    </View>
                ) : <></>
            }

            {
                items.map((item, index) => (
                    //item da lista
                    <View style={styles.listItem} key={item.id}>
                        <Text style={styles.listItemTitle}>
                            {item.name}
                        </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleSetItemStatus(index)}
                        >
                            <Text style={{ ...styles.buttonText, color: item.done ? "#f00" : "#2b7ed7" }}>
                                {item.done ? "Desfazer" : "Feito"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))
            }

        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15
    },

    listItem: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 15

    },

    listItemTitle: {
        fontSize: 16,
        flex: 1,
    },

    insertContainer: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingBottom: 15
    },

    insertInputContainer: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },

    insertInput: {
        fontSize: 17,
        flex: 1,


    },

    Button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    buttonText: {
        textTransform: 'uppercase',
    }
});