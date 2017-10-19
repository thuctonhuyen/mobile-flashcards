import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

export default class Quiz extends React.Component {

    render() {

        const {list_of_quizzes} = this.props.navigation.state.params;



        return (

            <Container>
                <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Text>Quiz here....</Text>

                </Content>

            </Container>
        );
    }
}


