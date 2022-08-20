import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';

export const SignIn = () => {
    return (
        <View style={styles.container}>
            <Animatable.View animation={'fadeInLeft'} style={styles.containerHeader}>
                <Text style={styles.mensagem}>Bem Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View style={styles.containerForm} animation={'fadeInUp'} delay={500}>
                <Text style={styles.titleInput}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Informe seu email...'
                    keyboardType='email-address'
                    placeholderTextColor='#ccc'
                />

                <Text style={styles.titleInput}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Informe sua senha..'
                    secureTextEntry={true}
                    placeholderTextColor='#ccc'
                />

                <TouchableOpacity style={styles.bottom}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAcount}>
                    <Text style={styles.textCreateAcount}>Não possui uma conta? Cadastre-se</Text>
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
        marginTop: '14%',
        marginBottom: '8%',
        marginStart: '5%',
    },
    mensagem: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    containerForm: {
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: '#fff',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    titleInput: {
        fontSize: 15,
        marginTop: 25,
    },
    input: {
        color: '#000',
        marginBottom: 10,
        paddingVertical: 5, 
        borderBottomWidth: 1,
        height: 40,
    },
    bottom: {
        paddingVertical: 5,
        backgroundColor: '#38A69D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: '10%',
        fontSize: 16,
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    createAcount: {
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCreateAcount: {
        color: '#a1a1a1',
    },
});