/*
To manage your AsyncStorage database, you'll want to create four different helper methods.
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
 */

import {AsyncStorage} from 'react-native';

export const DECKS_STORAGE_KEY = '@MobileFlashCard:decks';
const initState = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}


export async function getDecks() {
    //let decks = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initState));
    const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (!result) {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initState));
        let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        return JSON.parse(decks);

    }else {

        return JSON.parse(result);
    }
}

export async function getDeck(id) {
    let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    decks = JSON.parse(decks);
    let result = decks.filter(deck => deck.id === id);

    return result;

}

export async function saveDeckTitle(title) {

    let new_deck = {[title]: {
        title: title,
            questions: []
    }};

    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY,
            JSON.stringify(new_deck));

    const decks = await getDecks();


    return (decks);


}

export async function addCardToDeck(title, card) {

    let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    decks = JSON.parse(decks);


    decks[title]['questions'].push(card);


    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));

    decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    return JSON.parse(decks);


}