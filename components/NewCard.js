import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, Item, Input
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {saveCard} from "../actions/index";
import {connect} from 'react-redux';
import {inputStyle, centerGrid, emptyRow} from "../helpers/commonStyle";


initState = {
    question: '',
    answer: ''
}

class NewCard extends React.Component {

    state = {}


    componentWillMount() {
        this.setState(initState);
    }

    handleOnPress = async (e) => {

        const {dispatch} = this.props;
        const {deck_title} = this.props.navigation.state.params;

        await dispatch(saveCard(deck_title, this.state));

        this.setState({question: '', answer: ''});


    }


    render() {
        return (
            <Container>
                <AppHeader header_title={"New Card"} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Grid style={centerGrid}>
                        <Row style={emptyRow}></Row>
                        <View style={inputStyle(Dimensions.get('window'))}>
                            <Item regular>
                                <Input placeholder='Type your question here...'
                                       value={this.state.question}
                                       onChangeText={text => this.setState({question: text})}/>
                            </Item>
                        </View>
                        <View style={inputStyle(Dimensions.get('window'))}>
                            <Item regular>
                                <Input placeholder='Type your answer here...'
                                       value={this.state.answer}
                                       onChangeText={text => this.setState({answer: text})}/>
                            </Item>
                        </View>
                        <Row>
                            <Button danger onPress={e => this.handleOnPress(e)}>
                                <Text>SUBMIT</Text>
                            </Button>
                        </Row>
                    </Grid>

                </Content>

            </Container>
        );
    }
}

export default connect()(NewCard)

