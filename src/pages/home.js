import React, { Fragment, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native';


export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Welcome Walison
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="New Skill"
                    placeholderTextColor="#555"
                    onChangeText={setNewSkill}
                />

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.7}
                    onPress={handleAddNewSkill}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>


                <Text style={[styles.title, { marginVertical: 50 }]}>
                    My Skills
                </Text>

                {
                    mySkills.map(skill => (
                        <TouchableOpacity
                            key={skill}
                            style={styles.buttonSkill}
                            activeOpacity={.7}
                        >
                            <Text style={styles.textSkill}>
                                {skill}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 22,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
    },
    textSkill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});