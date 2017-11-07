import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import rootReducer from './reducers'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import ListOfDecks from './components/ListOfDecks'
import IndividualDeck from './components/IndividualDeck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import {StackNavigator, TabNavigator} from 'react-navigation'
import thunk from 'redux-thunk';
import logger from 'redux-logger'


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

        NewDeck: {
            screen: NewDeck
        },

        Quiz: {
            screen: Quiz
        },
        NewCard: {
            screen: NewCard
        }

    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({});
