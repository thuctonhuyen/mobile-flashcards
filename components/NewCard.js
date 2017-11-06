import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3, Item, Input
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

export default class NewCard extends React.Component {

    state={
        question: '',
        answer:''
    }

    handleOnPress = (e) => {

        console.log(this.state);

    }


    render() {
        return (
            <Container>
                <AppHeader header_title={"New Card"} go_back={this.props.navigation.goBack}/>
                <Content>

                    <Item regular>
                        <Input placeholder='Type your question here...'
                               onChangeText={text => this.setState({question: text})}/>
                    </Item>
                    <Item regular>
                        <Input placeholder='Type your answer here...'
                               onChangeText={text => this.setState({answer: text})}/>
                    </Item>
                    <Button dark onPress={e => this.handleOnPress(e)}>
                        <Text>SUBMIT</Text>
                    </Button>

                </Content>

            </Container>
        );
    }
}


