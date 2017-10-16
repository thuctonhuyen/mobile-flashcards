import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import {TouchableOpacity} from 'react-native'


class ListOfDecks extends React.Component {

    render() {

        const cards = [{title: 'udacicards', total: '3'},
            {title: 'newdeck', total: '0'},
            {title: 'newdeck2', total: '4'}];

        return (
            <Container>
                <Header>
                    <Text>Decks</Text>
                </Header>
                <Content>
                    {cards.map(card =>
                        <TouchableOpacity key={card.title} onPress={() =>
                            this.props.navigation.navigate('Deck', {card})}>
                        <Card >
                            <CardItem>
                                <Body>
                                <H2 style={styles.textCenter}>{card.title}</H2>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={[styles.textCenter, styles.fadedText]}>{card.total} cards</Text>
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

    fadedText:{
        color: '#717477'
    }
})

function mapStateToProps (entries) {
    return {
        entries
    }
}

export default connect(
    mapStateToProps,
)(ListOfDecks)
