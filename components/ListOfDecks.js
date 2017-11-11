import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem
} from 'native-base';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native'
import AppHeader from './AppHeader'
import {fetchAllDecks} from "../actions/index";
import {headerText} from "../helpers/commonStyle";

class ListOfDecks extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchAllDecks());
    }

    render() {

        const {decks} = this.props;

        return (
            <Container>
                <AppHeader home={true} header_title={"List of Decks"}/>
                <Content>
                    {Object.keys(decks).sort().map(key =>
                        <TouchableOpacity key={key} onPress={() =>
                            this.props.navigation.navigate('Deck', {deck_title: key})}>
                            <Card style={{height: 100}}>
                                <CardItem>
                                    <Body>
                                    <Text style={[headerText, styles.textCenter]}>{decks[key]['title']}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Text style={[styles.textCenter, styles.fadedText]}>{decks[key]['questions'].length}
                                        cards</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    )}
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    textCenter: {
        alignSelf: 'center'
    },

    fadedText: {
        color: '#717477'
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps,
)(ListOfDecks)
