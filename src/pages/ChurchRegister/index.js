import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
//import CheckBoxPage from '../../components/checkBox';


export default function ChurchRegister() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>

                <Image
                    source={require('../../../assets/Logo.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </Animatable.View>


            <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>

                <View style={styles.containerForm}>

                    <StatusBar style="auto" />
                    <Text style={styles.title}>Nome da instituição</Text>
                    <TextInput
                        placeholder="Digite o nome da instituição..."
                        style={styles.input} />

                    <Text style={styles.title}>Cidade</Text>
                    <TextInput
                        placeholder="Digite a cidade..."
                        style={styles.input} />

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite seu E-mail..."
                        style={styles.input} />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Digite sua senha..."
                        style={styles.input} />

                    <Text style={styles.title}>Confirmar Senha</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Digite sua senha..."
                        style={styles.input} />

                    <TouchableOpacity
                        style={styles.button}
                     onPress={() => navigation.navigate("MainScreen")}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => navigation.navigate("")}
                    >
                    
                    </TouchableOpacity> */}

                </View>


            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3d00f",
        alignItems: 'center',
    },
    containerHeader: {
        flex: 1,
        marginTop: '14%',
        marginBottom: "8%",
        // paddingStart: '5%',
    },
    welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 180,
        borderRadius: 20,
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 3,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        paddingStart: '5%',
        paddingEnd: '5%',
        width:'95%', //ajusta a largura do container
    },
    title: {
        fontSize: 18,
        marginTop: 8
    },
    input: {
        borderBottomWidth: 1,
        height: 20, // ajuste a altura conforme necessário
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 6,
        paddingVertical: 6,
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold'
   
    }
    });