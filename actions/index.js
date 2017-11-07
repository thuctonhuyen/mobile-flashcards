import * as action_type from './action_types'
import {getDecks, saveDeckTitle, addCardToDeck} from "../helpers/api";

export const receiveAllDecks = decks => ({
    type: action_type.RECEIVE_ALL_DECKS,
    decks
});

export const fetchAllDecks = () => dispatch => (
    getDecks().then(decks => dispatch(receiveAllDecks(decks)))
);


export const saveDeck = (title) => dispatch => (
    saveDeckTitle(title).then(decks => dispatch(receiveAllDecks(decks)))
);

export const saveCard = (title, card) => dispatch => (
    addCardToDeck(title, card).then(decks => dispatch(receiveAllDecks(decks)))
);

