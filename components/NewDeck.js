import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

export default class NewDeck extends React.Component {

    render() {



        return (

            <Container>
                <AppHeader header_title={"New Deck"} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Text>New Deck here....</Text>

                </Content>

            </Container>
        );
    }
}


