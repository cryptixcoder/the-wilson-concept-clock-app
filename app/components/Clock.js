import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'

import * as THEME from '../styles/theme'

export default class Clock extends Component {
    state = {
        time: moment().format('h:mm a'),
        date: moment().format('LL'),
        interval: null,
    }

    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({
                time: moment().format('h:mm a'),
                date: moment().format('LL'),
            })
        }, 1000)

        this.setState({
            interval: interval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeText}>{this.state.time}</Text>
                <Text style={styles.dateText}>{this.state.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginBottom: 40,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontFamily: 'montserrat-bold',
        fontSize: 60,
        color: THEME.colors.secondaryColor
    },
    dateText: {
        fontFamily: 'montserrat-light',
        fontSize: 30,
        color: THEME.colors.secondaryColor
    }
})