import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Container, Title, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem
} from 'native-base';


export default class AppHeader extends React.Component {

    render() {

        const {home, header_title, go_back} = this.props;


        return (
            (home) ?
                (
                    <Header>
                        <Body>
                        <Title>List of Decks</Title>
                        </Body>
                    </Header>
                )
                :
                (
                    <Header>
                        <Left>
                            <Button transparent onPress={() => go_back()}>
                                <Icon name="arrow-back"/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>{header_title}</Title>
                        </Body>
                        <Right/>
                    </Header>


                )

        );
    }
}


