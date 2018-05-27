import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { KeepAwake, AppLoading, Asset, Font } from 'expo'
import moment from 'moment'
import Clock from '../components/Clock'
import Quote from '../components/Quote'

import QUOTES from '../constants/quotes'
import * as THEME from '../styles/theme'


export default class Main extends Component {
    state = {
        loaded: false,
        quote: ""
    }

    componentDidMount() {
        this.setState({
            quote: QUOTES[Math.floor(Math.random() * QUOTES.length)]
        })
    }

    _loadResourcesAsync() {
        return Promise.all([
            Font.loadAsync({
                'montserrat-bold': require('../fonts/Montserrat-Bold.ttf'),
                'montserrat-light': require('../fonts/Montserrat-Light.ttf')
            })
        ])
    }

    render() {
        if (!this.state.loaded) {
            return (<AppLoading
                startAsync={this._loadResourcesAsync}
                onFinish={() => this.setState({ loaded: true })}
                onError={console.warn}
            />)
        }
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                    <Text style={styles.titleText}>The Wilson Concept</Text>
                    <Text style={styles.metaText}>Branding • Design • Development • Strategy</Text>
                    <Clock />
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                    <Quote content={this.state.quote} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: THEME.colors.primaryColor
    },
    logoContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 75,
        height: 75
    },
    titleText: {
        fontSize: 25,
        fontFamily: 'montserrat-bold',
        color: THEME.colors.secondaryColor
    },
    metaText: {
        fontSize: 13,
        fontFamily: 'montserrat-light',
        color: THEME.colors.secondaryColor
    }
})