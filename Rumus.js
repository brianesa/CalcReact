import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';
class Rumus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: '',
            second: '',
        }
    }
    add() {
        try {
            if ((isNaN(this.state.first) || isNaN(this.state.second)) || (this.state.first === '' || this.state.second === '')) {
                throw 'not a number';
            } else {
                Alert.alert('Total', (this.state.first + this.state.second).toString());
            }
        } catch (err) {
            Alert.alert('Error', err);
        }
    }
    minus() {
        try {
            if ((isNaN(this.state.first) || isNaN(this.state.second)) || (this.state.first === '' || this.state.second === '')) {
                throw 'not a number';
            } else {
                Alert.alert('Total', (this.state.first - this.state.second).toString());
            }
        } catch (err) {
            Alert.alert('Error', err);
        }
    }
    times() {
        try {
            if ((isNaN(this.state.first) || isNaN(this.state.second)) || (this.state.first === '' || this.state.second === '')) {
                throw 'not a number';
            } else {
                Alert.alert('Total', (this.state.first * this.state.second).toString());
            }
        } catch (err) {
            Alert.alert('Error', err);
        }
    }
    divide() {
        try {
            if ((isNaN(this.state.first) || isNaN(this.state.second)) || (this.state.first === '' || this.state.second === '')) {
                throw 'not a number';
            } else {
                Alert.alert('Total', (this.state.first / this.state.second).toString());
            }
        } catch (err) {
            Alert.alert('Error', err);
        }
    }
    render() {
        return (
            //Container Utama
            <View style={styles.container}>
                <View style={styles.empty} />
                <Text style={styles.welcome}> Please, Input some Numbers...</Text>
                <View style={styles.hr} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter First Number"
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ first: parseInt(text) })}
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter Second Number"
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ second: parseInt(text) })}
                    keyboardType='numeric'
                />
                {/* Container Tombol */}
                <View style={styles.containers}>
                    <View style={styles.button}>
                        <Button onPress={() => this.add()}
                            style={styles.buttonStyle}
                            color="#f194ff"
                            title="+" />
                    </View>
                    <View style={styles.button} >
                        <Button
                            onPress={() => this.minus()}
                            style={styles.buttonStyle}
                            color="#f194ff"
                            title="-" />
                    </View>
                    <View style={styles.button} >
                        <Button
                            onPress={() => this.times()}
                            style={styles.buttonStyle}
                            color="#f194ff"
                            title="x" />
                    </View>
                    <View style={styles.button} >
                        <Button
                            onPress={() => this.divide()}
                            style={styles.buttonStyle}
                            color="#f194ff"
                            title="/" />
                    </View>
                </View>
                {/* Akhir Container Tombol */}
            </View>
            //Akhir Container Utama
        );
    }
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    containers: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    welcome: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: "bold"
    },
    button: {
        backgroundColor: 'green',
        width: '20%',
        height: 40,
    },
    empty: {
        flex: 1,
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100, 100, 100, 0.4)',
        marginBottom: 10
    }
});

export default Rumus