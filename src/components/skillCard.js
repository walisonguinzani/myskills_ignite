import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export function SkillCard({skill}) {
    return (
        <TouchableOpacity style={styles.buttonSkill} activeOpacity={.7}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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