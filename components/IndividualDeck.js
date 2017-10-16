import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';

export default class ListOfDecks extends React.Component {

    render() {

        const {card} = this.props.navigation.state.params;

        return (
            <Container>
                <Content padder>
                    <Header/>
                    <Body>
                        <H2>{card.title}</H2>
                        <Text>{card.total} cards </Text>
                        <Button>
                            <Text>Add Card</Text>
                        </Button>
                        <Button>
                            <Text>Start Quiz</Text>
                        </Button>
                    </Body>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({});
