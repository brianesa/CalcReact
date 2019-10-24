const anyImages = [
    {
        uri: require('./Koala.jpg'),
        caption: "Koala"
    },
    {
        uri: require('./Hydrangeas.jpg'),
        caption: "Bunga"
    },
    {
        uri: require('./Jellyfish.jpg'),
        caption: "Ubur - Ubur"
    },
    {
        uri: require('./Lighthouse.jpg'),
        caption: "Rumah"
    },
    {
        uri: require('./Penguins.jpg'),
        caption: "Penguin"
    },
    {
        uri: require('./Tulips.jpg'),
        caption: "Bunga Tulip"
    }
];
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        width: 320,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageBg: {
        resizeMode: "contain"
    },
    imageCaption: {
        textAlign: 'center',
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Damascus',
        color: 'gray'
    },
    empty: {
        flex: 1
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100, 100, 100, 0.4)',
        width: width,
        marginBottom: 10
    }
});

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { Header } from 'react-native-elements';
export default class Gambar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            imageWidth: null
        };
    }
    render() {
        const image = anyImages[this.state.index];
        return (
            <View style={styles.container}>
                <Header
                    // leftComponent={{ icon: 'menu', color: 'black' }}
                    centerComponent={{ text: 'HEADER', style: { color: 'black' } }}
                    // rightComponent={{ icon: 'home', color: 'black' }}
                    containerStyle={{
                        backgroundColor: '#809c13',
                        justifyContent: 'space-around',
                      }}
                />
                <View style={styles.empty} />
                <Text style={styles.imageCaption}>{image.caption}</Text>
                <View style={styles.hr} />
                <TouchableHighlight onPress={this.newImage.bind(this)} style={styles.image}>
                    <ImageBackground source={image.uri} style={styles.image} resizeMode="contain"
                        onLayout={this.onNewLayout.bind(this)}>
                    </ImageBackground>
                </TouchableHighlight>
                <View style={styles.empty} />
            </View >
        );
    }
    newImage(event) {
        const { index, imageWidth } = this.state,
            X = event.nativeEvent.locationX,
            touchCalc = (X < imageWidth / 2) ? -1 : +1;
        let newIndex = (index + touchCalc) % anyImages.length;
        if (newIndex < 0) {
            newIndex = anyImages.length - Math.abs(newIndex);
        }
        this.setState({
            index: newIndex
        });
    }
    onNewLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
    }
}
