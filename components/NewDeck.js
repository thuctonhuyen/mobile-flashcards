import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3, Item, Input
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {saveDeck} from "../actions/index";
import {connect} from 'react-redux'


class NewDeck extends React.Component {

    state = {
        title: '',
    }

    handleOnPress = async (e) => {
        const {dispatch} = this.props;
        await dispatch(saveDeck(this.state.title));

        this.setState({title: ''});

    }

    render() {
        return (
            <Container>
                <AppHeader header_title={"New Deck"} go_back={this.props.navigation.goBack}/>
                <Content>
                    <H1>What is the title of your new deck?</H1>
                    <Item regular>
                        <Input placeholder='Enter title here...'
                               value={this.state.title}
                               onChangeText={text => this.setState({title: text})}/>
                    </Item>

                    <Button dark onPress={e => this.handleOnPress(e)}>
                        <Text>SUBMIT</Text>
                    </Button>

                </Content>

            </Container>
        );
    }
}




export default connect(

)(NewDeck)
