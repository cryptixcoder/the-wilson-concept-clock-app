import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as THEME from '../styles/theme'


export default ({ content }) => (
    <View style={styles.container}>
        <View style={styles.quoteMarkContainer}>
            <Text style={styles.quoteMark}>“</Text>
        </View>
        <Text style={styles.quoteText}>
            {content}
        </Text>
        <View style={styles.quoteMarkContainer}>
            <Text style={styles.quoteMark}>”</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    quoteMarkContainer: {
        // marginTop: -20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    quoteMark: {
        fontFamily: 'montserrat-bold',
        fontSize: 40,
        color: THEME.colors.secondaryColor,
        height: 160
    },
    quoteText: {
        flex: 4,
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
        fontSize: 30,
        color: THEME.colors.secondaryColor,
    }
})