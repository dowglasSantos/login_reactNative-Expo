import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export const Welcome = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#38A69D' />
            <View style={styles.containerHeader}>
                <Animatable.Image source={require('../../assets/logo.png')} animation={'flipInY'} />
            </View>

            <Animatable.View style={styles.containerFooter} animation={'fadeInUp'} delay={600}>
                <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.subTitle}>Faça seu login para começar</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38A69D',
    },
    containerHeader: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFooter: {
        flex: 1,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        backgroundColor: '#fff',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 28,
    },
    subTitle: {
        fontSize: 15,
        marginTop: 10,
        color: '#a1a1a1'
    },
    button: {
        paddingVertical: 5,
        backgroundColor: '#38A69D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '60%',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '15%',
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});