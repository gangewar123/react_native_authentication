import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <View style={styles.topContainer}>
                    {/* <Image style={{ width: 20, height: 20, }} source={require('./assets/arrow-pointing-to-right.png')} /> */}

                    <Image style={{ width: 100, height: 100 }} source={require('./assets/vine.png')} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>
                            WELCOME,
                       </Text>
                        <Text style={styles.textNew}>
                            Log in to Continue
                    </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="username" placeholderTextColor="white" />
                        <TextInput style={styles.input} placeholder="password" placeholderTextColor="white" />
                        <View style={styles.dummy}>
                            <Text style={styles.started}>
                                Get Started
                        </Text>
                            <Image style={{ width: 20, height: 20, }} source={require('./assets/arrow-pointing-to-right.png')} />
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={{ color: 'white', }}>
                                Don't have an account?
                            </Text>
                            <View
                                style={styles.buttonContainer}
                            >

                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>

                </View>


            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    dummy: {
        padding: 10,
        flexDirection: "row",
        // alignContent: 'center',
        alignItems: 'center',
        // alignSelf: 'baseline',
        // backgroundColor: 'red',
        justifyContent: 'flex-start',

    },
    rowContainer: {
        paddingTop: 40,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },

    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    textNew: {
        padding: 10,
        fontSize: 20,
        color: 'grey',
    },
    bottomContainer: {
        paddingTop: 40,
        paddingLeft: 20,
        flex: 4,
        // alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // justifyContent: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: "blue",
    },
    textContainer: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
    inputContainer: {
        flex: 3,
        paddingTop: 60,
        paddingRight: 20,

    },
    input: {
        height: 40,
        // backgroundColor: 'white',
        color: 'white',
        paddingLeft: 10,
        marginBottom: 20,
        borderColor: 'grey',
        borderBottomWidth: 3,
    },
    buttonContainer: {
        width: 150,
        height: 100,
        flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 15,
        backgroundColor: 'white',
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    started: {
        color: 'white',
        padding: 10,
        fontSize: 20,
    },
    space: {
        // justifyContent: 'center',
        flex: 7,
        width: Dimensions.get('window').width,
        // height: 200,
        backgroundColor: 'white',
    }
});