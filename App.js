import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ListOfDecks from './components/ListOfDecks'
import IndividualDeck from './components/IndividualDeck'
import Quiz from './components/Quiz'
import {StackNavigator, TabNavigator} from 'react-navigation'

//TODO: tab navigator => later on


//stack navigator
const MainNavigator = StackNavigator({
        Home: {
            screen: ListOfDecks,
        },

        Deck: {
            screen: IndividualDeck
        },

        Quiz: {
            screen: Quiz
        }

    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    });


export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <MainNavigator/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
