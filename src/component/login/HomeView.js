import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class HomeView extends React.Component {

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: 'black' }}>HOME</Text>
            </View>
        );
    }

    onBackPress() {
        if (this.props.navigation != null) {
            this.props.navigation.goBack();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
});