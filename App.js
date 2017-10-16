import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ListOfDecks from './components/ListOfDecks'
import IndividualDeck from './components/IndividualDeck'
import {StackNavigator, TabNavigator } from 'react-navigation'

//tab navigator => later on
const Tabs = TabNavigator({
    Home: {
        screen: ListOfDecks,
    },

    Deck:{
        screen: IndividualDeck
    }
})

//stack navigator
const MainNavigator = StackNavigator({
    Home: {
        screen: ListOfDecks,
    },

    Deck:{
        screen: IndividualDeck
    }

});


export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Container>
                    <MainNavigator/>
                </Container>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
