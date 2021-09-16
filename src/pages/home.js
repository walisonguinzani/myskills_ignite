import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import { SkillCard } from '../components/skillCard';
import { Button } from '../components/button';

export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greetings, setGreetings] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        console.log(currentHour);

        if (currentHour < 12) {
            setGreetings("Good morning");
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreetings("Good afternoon");
        } else {
            setGreetings("Good night");
        }
    }, [mySkills])

    return (
        <>
            <View style={styles.container}>
                
                <Text style={styles.title}>
                    Welcome Walison
                </Text>

                <Text style={styles.greetings}>
                    {greetings}
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="New Skill"
                    placeholderTextColor="#555"
                    onChangeText={setNewSkill}
                />

                <Button onPress={handleAddNewSkill} />

                <Text style={[styles.title, { marginVertical: 50 }]}>
                    My Skills
                </Text>

                <FlatList
                    data={mySkills}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (<SkillCard skill={item} />)}
                />

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
    greetings: {
        color: '#fff',
    },
});