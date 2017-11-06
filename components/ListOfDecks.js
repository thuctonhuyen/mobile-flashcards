import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native'
import AppHeader from './AppHeader'
import {fetchAllDecks} from "../actions/index";

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
                    {Object.keys(decks).map(key =>
                        <TouchableOpacity key={key} onPress={() =>
                            this.props.navigation.navigate('Deck', {card: decks[key]})}>
                            <Card style={{height: 100}}>
                                <CardItem>
                                    <Body>
                                    <H1 style={styles.textCenter}>{decks[key]['title']}</H1>
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
