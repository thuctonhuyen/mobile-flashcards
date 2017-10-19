import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ListOfDecks from './components/ListOfDecks'
import IndividualDeck from './components/IndividualDeck'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import {StackNavigator, TabNavigator} from 'react-navigation'


const Tabs = TabNavigator({
        Home: {
            screen: ListOfDecks
        },

        NewDeck: {
            screen: NewDeck
        }

    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
        }
    });


//stack navigator
const MainNavigator = StackNavigator({
        Home: {
            screen: Tabs,
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
