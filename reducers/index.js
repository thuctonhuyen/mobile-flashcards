import * as action_type from "../actions/action_types";


function rootReducer(state = {}, action) {

    //console.log("action", action);

    switch (action.type) {
        case action_type.RECEIVE_ALL_DECKS:
        case action_type.ADD_DECK:
            return action.decks;

        case action_type.ADD_CARD:
            //card will be in format as following: {deck_title: ..., question:...., answer: ...}
            const {card} = action;
            const {deck_title, question, answer} = card;
            let found_deck = state.filter(d => Object.keys(d) === deck_title);
            const new_card = {question, answer};
            found_deck.push(new_card);
            state.filter((d) => Object.keys(d) !== deck_title).concat([found_deck]);
            return state;

        default:
            return state;

    }

}


export default rootReducer;