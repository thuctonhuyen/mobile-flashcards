import * as action_type from './action_types'
import {getDecks, saveDeckTitle} from "../helpers/api";

export const receiveAllDecks = decks => ({
    type: action_type.RECEIVE_ALL_DECKS,
    decks
});

export const fetchAllDecks = () => dispatch => (
    getDecks().then(decks => dispatch(receiveAllDecks(decks)))
);


export function addDeck(decks) {
    return {
        type: action_type.ADD_ENTRY,
        decks,
    }
}

export const saveDeck = (title) => dispatch => (
    saveDeckTitle(title).then(decks => console.log(decks))
);

